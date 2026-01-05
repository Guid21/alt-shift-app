export type DocumentType = string;

export type DocumentPayload = Record<string, unknown>;

export type Document<TPayload extends DocumentPayload = DocumentPayload> = {
  id: string;
  type: DocumentType;
  payload: TPayload;
  generatedText?: string[];
  createdAt: number;
};
