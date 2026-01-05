import type { Document } from '../document/types';
import {
  APPLICATION_DOCUMENT_TYPE,
  type Application,
  type ApplicationDocument,
  type ApplicationPayload,
} from './types';

export function applicationToDocument(application: Application): ApplicationDocument {
  const { id, createdAt, generatedText, ...payload } = application;

  return {
    id,
    type: APPLICATION_DOCUMENT_TYPE,
    createdAt,
    generatedText,
    payload,
  };
}

export function documentToApplication(document: ApplicationDocument): Application {
  const { id, createdAt, generatedText, payload } = document;

  return {
    id,
    createdAt,
    generatedText,
    ...payload,
  };
}

export function isApplicationDocument(
  document: Document
): document is Document<ApplicationPayload> {
  return document.type === APPLICATION_DOCUMENT_TYPE;
}
