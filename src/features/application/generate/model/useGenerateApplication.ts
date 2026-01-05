'use client';

import { useCallback } from 'react';

import { documentToApplication, isApplicationDocument } from '@/entities/application/adapter';
import { useDocumentsStore } from '@/entities/document/store';
import { generateApplicationAction } from '../api/actions';
import type { Application } from '@/entities/application/types';

export type ApplicationGenerationInput = Omit<Application, 'id' | 'createdAt' | 'generatedText'>;

type UseGenerationApplicationParams = {
  id?: string;
  onError?: (message: string) => void;
  updateApplication: (
    application: Application & {
      generatedText: NonNullable<Application['generatedText']>;
    }
  ) => void;
  createApplication: (
    application: Omit<Application, 'id' | 'createdAt'> & {
      generatedText: NonNullable<Application['generatedText']>;
    },
    id?: string
  ) => void;
};

export function useGenerationApplication({
  id,
  onError,
  updateApplication,
  createApplication,
}: UseGenerationApplicationParams) {
  return useCallback(
    async (payload: ApplicationGenerationInput) => {
      const delayMs = 2000 + Math.random() * 1000;
      await new Promise((resolve) => setTimeout(resolve, delayMs));

      try {
        const result = await generateApplicationAction(payload);

        if (!result.success) {
          onError?.(
            typeof result.message === 'string' && result.message.length > 0
              ? result.message
              : 'Unknown error generating application'
          );
          return;
        }

        const paragraphs = result.message;
        if (!paragraphs?.length) {
          onError?.('Unknown error generating application');
          return;
        }

        const { documents } = useDocumentsStore.getState();
        const existingDocument = id
          ? documents.find((document) => document.id === id && isApplicationDocument(document))
          : undefined;

        if (existingDocument && isApplicationDocument(existingDocument)) {
          const existingApplication = documentToApplication(existingDocument);
          updateApplication({
            ...existingApplication,
            ...payload,
            generatedText: paragraphs,
          });
          return;
        }

        createApplication({ ...payload, generatedText: paragraphs }, id);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Unknown error generating application';
        onError?.(message);
      }
    },
    [id, onError, updateApplication, createApplication]
  );
}
