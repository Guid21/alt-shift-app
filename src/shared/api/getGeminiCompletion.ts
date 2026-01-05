'use server';

import { GoogleGenerativeAI, type GenerationConfig } from '@google/generative-ai';

const MODEL_NAME = process.env.GEMINI_MODEL ?? 'gemini-2.5-flash';

let cachedModel: ReturnType<GoogleGenerativeAI['getGenerativeModel']> | null = null;

function getModel() {
  if (cachedModel) {
    return cachedModel;
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set');
  }

  const client = new GoogleGenerativeAI(apiKey);
  cachedModel = client.getGenerativeModel({ model: MODEL_NAME });

  return cachedModel;
}

export async function getGeminiCompletion(
  prompt: string,
  generationConfig?: GenerationConfig
): Promise<string> {
  const model = getModel();
  const result = await model.generateContent({
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    ...(generationConfig ? { generationConfig } : {}),
  });
  const text = result.response.text()?.trim();

  if (!text) {
    throw new Error('Gemini returned an empty response');
  }

  return text;
}
