import type { Document } from '../document/types';

export const APPLICATION_DOCUMENT_TYPE = 'application';

export type ApplicationId = string;

export type ApplicationPayload = {
  jobTitle: string;
  company: string;
  skills: string;
  details: string;
};

export type Application = ApplicationPayload & {
  id: ApplicationId;
  generatedText?: string[];
  createdAt: number;
};

export type ApplicationDocument = Document<ApplicationPayload>;
