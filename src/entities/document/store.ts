import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { Document } from './types';

type DocumentsState = {
  documents: Document[];

  create(document: Document): void;
  update(document: Document): void;
  remove(id: string): void;
};

export const useDocumentsStore = create<DocumentsState>()(
  persist(
    (set) => ({
      documents: [],

      create: (document) =>
        set((state) => ({
          documents: [document, ...state.documents.filter((existing) => existing.id !== document.id)],
        })),

      update: (document) =>
        set((state) => ({
          documents: state.documents.map((existing) =>
            existing.id === document.id ? document : existing
          ),
        })),

      remove: (id) =>
        set((state) => ({
          documents: state.documents.filter((document) => document.id !== id),
        })),
    }),
    {
      name: 'documents',
    }
  )
);
