'use client';

import { applicationToDocument } from '@/entities/application/adapter';
import type { Application } from '@/entities/application/types';
import { useDocumentsStore } from '@/entities/document/store';

export type UpdateApplicationInput = Application & {
  generatedText: NonNullable<Application['generatedText']>;
};

export function updateApplication(application: UpdateApplicationInput): Application {
  useDocumentsStore.getState().update(applicationToDocument(application));

  return application;
}
