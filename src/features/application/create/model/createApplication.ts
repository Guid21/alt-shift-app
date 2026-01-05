'use client';

import { applicationToDocument } from '@/entities/application/adapter';
import type { Application } from '@/entities/application/types';
import { useDocumentsStore } from '@/entities/document/store';

export type CreateApplicationInput = Omit<Application, 'id' | 'createdAt'> & {
  generatedText: NonNullable<Application['generatedText']>;
};

function createId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `application-${Date.now()}`;
}

export function createApplication(payload: CreateApplicationInput, id?: string): Application {
  const application: Application = {
    id: id ?? createId(),
    ...payload,
    createdAt: Date.now(),
  };

  useDocumentsStore.getState().create(applicationToDocument(application));

  return application;
}
