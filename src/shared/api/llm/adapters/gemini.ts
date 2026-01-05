import { SchemaType, type Schema } from '@google/generative-ai';

import { getGeminiCompletion } from '@/shared/api/getGeminiCompletion';

import type { LlmAdapter, LlmGenerateParams, LlmJsonSchema } from '../types';

export function createGeminiAdapter(): LlmAdapter {
  return {
    name: 'gemini',
    async generate({ prompt, responseMimeType, responseSchema }: LlmGenerateParams) {
      const generationConfig =
        responseMimeType || responseSchema
          ? {
              responseMimeType: responseMimeType ?? 'application/json',
              ...(responseSchema ? { responseSchema: toGeminiSchema(responseSchema) } : {}),
            }
          : undefined;

      return getGeminiCompletion(prompt, generationConfig);
    },
  };
}

function toGeminiSchema(schema: LlmJsonSchema): Schema {
  const description = 'description' in schema ? schema.description : undefined;

  switch (schema.type) {
    case 'string':
      return { type: SchemaType.STRING, description };
    case 'number':
      return { type: SchemaType.NUMBER, description };
    case 'integer':
      return { type: SchemaType.INTEGER, description };
    case 'boolean':
      return { type: SchemaType.BOOLEAN, description };
    case 'array':
      return { type: SchemaType.ARRAY, items: toGeminiSchema(schema.items), description };
    case 'object':
      return {
        type: SchemaType.OBJECT,
        properties: Object.fromEntries(
          Object.entries(schema.properties).map(([key, value]) => [key, toGeminiSchema(value)])
        ),
        ...(schema.required ? { required: schema.required } : {}),
        description,
      };
    default: {
      const _exhaustiveCheck: never = schema;
      return _exhaustiveCheck;
    }
  }
}
