'use client';

import { documentToApplication, isApplicationDocument } from '@/entities/application/adapter';
import { useDocumentsStore } from '@/entities/document/store';
import { useMemo } from 'react';

import { ApplicationsGrid } from '../ApplicationsGrid/ApplicationsGrid';
import styles from './ApplicationsList.module.css';

export function ApplicationsList() {
  const documents = useDocumentsStore((state) => state.documents);

  const applications = useMemo(
    () => documents.filter(isApplicationDocument).map(documentToApplication),
    [documents]
  );

  if (!applications.length) {
    return null;
  }

  return (
    <div className={styles.list}>
      <ApplicationsGrid items={applications} />
    </div>
  );
}
