export type LlmResponseMimeType = 'text/plain' | 'application/json';

export type LlmJsonSchema =
  | { type: 'string'; description?: string }
  | { type: 'number'; description?: string }
  | { type: 'integer'; description?: string }
  | { type: 'boolean'; description?: string }
  | { type: 'array'; items: LlmJsonSchema; description?: string }
  | {
      type: 'object';
      properties: Record<string, LlmJsonSchema>;
      required?: string[];
      description?: string;
    };

export type LlmGenerateParams = {
  prompt: string;
  responseMimeType?: LlmResponseMimeType;
  responseSchema?: LlmJsonSchema;
};

export type LlmAdapter = {
  name: string;
  generate: (params: LlmGenerateParams) => Promise<string>;
};
