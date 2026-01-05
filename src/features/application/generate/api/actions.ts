'use server';

import { applicationGenerationSchema } from '@/entities/application/model/schema';
import { Application } from '@/entities/application/types';
import { generateLlmContent, type LlmJsonSchema } from '@/shared/api/llm';

const DEFAULT_ERROR_MESSAGE = 'Failed to generate application';

const responseSchema: LlmJsonSchema = {
  type: 'object',
  properties: {
    paragraphs: {
      type: 'array',
      items: { type: 'string' },
      description: 'Each item is a full paragraph of the cover letter.',
    },
  },
  required: ['paragraphs'],
};

type GenerateApplicationActionResult =
  | { success: true; message: string[] }
  | { success: false; message: string };

function parseParagraphs(rawResponse: string): string[] {
  try {
    const parsed = JSON.parse(rawResponse) as { paragraphs?: unknown };

    if (!Array.isArray(parsed.paragraphs)) {
      throw new Error('Response did not include paragraphs array');
    }

    const paragraphs = parsed.paragraphs
      .map((paragraph) => (typeof paragraph === 'string' ? paragraph.trim() : ''))
      .filter((paragraph) => paragraph.length > 0);

    if (!paragraphs.length) {
      throw new Error('No valid paragraphs returned');
    }

    return paragraphs;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Invalid response format';
    throw new Error(message);
  }
}

export async function generateApplicationAction(
  payload: Omit<Application, 'id' | 'createdAt' | 'generatedText'>
): Promise<GenerateApplicationActionResult> {
  const validationResult = applicationGenerationSchema.safeParse(payload);

  if (!validationResult.success) {
    const fieldErrors = validationResult.error.flatten((err) => err.message).fieldErrors;
    const firstError = Object.values(fieldErrors).flat().filter(Boolean)[0] ?? 'Validation failed';

    return { success: false, message: firstError };
  }

  const { jobTitle, company, skills, details } = validationResult.data;
  const prompt = `
You are writing a concise cover letter that mirrors this structure: greeting, interest in the role, skills, value to the company, closing.
Role: ${jobTitle}
Company: ${company}
Skills to highlight: ${skills}
Details to weave in: ${details}
Tone: warm, confident, professional. Keep 4-5 short paragraphs similar to the provided sample.
Return only JSON that matches responseSchema. No markdown, headings, or extra commentary.
responseSchema: {"paragraphs": string[] where each entry is one paragraph in order}
  `.trim();

  try {
    const rawResponse = await generateLlmContent({
      prompt,
      responseMimeType: 'application/json',
      responseSchema,
    });
    const paragraphs = parseParagraphs(rawResponse);

    return {
      success: true,
      message: paragraphs,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : DEFAULT_ERROR_MESSAGE;

    return { success: false, message };
  }
}
