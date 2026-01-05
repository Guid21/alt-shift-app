import type { LlmAdapter, LlmGenerateParams } from './types';
import { createGeminiAdapter } from './adapters/gemini';

let activeAdapter: LlmAdapter = createGeminiAdapter();

export function setLlmAdapter(adapter: LlmAdapter) {
  activeAdapter = adapter;
}

export function getLlmAdapter(): LlmAdapter {
  return activeAdapter;
}

export async function generateLlmContent(params: LlmGenerateParams): Promise<string> {
  return activeAdapter.generate(params);
}
