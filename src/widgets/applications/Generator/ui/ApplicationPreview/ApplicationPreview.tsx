'use client';

import React from 'react';
import classNames from 'classnames';

import { CopyButton } from '@/features/application/copy';
import { Card, CardContent, CardFooter } from '@/shared/ui-kit/Card';
import { ParagraphList } from '@/shared/ui-kit/ParagraphList';
import { Typography } from '@/shared/ui-kit/Typography';

import styles from './ApplicationPreview.module.css';
import { Loader } from '@/shared/ui-kit/Loader';

type ApplicationPreviewProps = {
  text?: string[];
  isLoading?: boolean;
  className?: string;
};

export function ApplicationPreview({ text, isLoading, className }: ApplicationPreviewProps) {
  const paragraphs = text ?? [];
  const hasText = paragraphs.length > 0;
  const copyText = paragraphs.join('\n\n');

  return (
    <Card variant="neutral" padding="md" className={classNames(styles.card, className)}>
      <CardContent>
        {isLoading && <Loader size={320} className={styles.loader} />}
        {!isLoading && hasText && <ParagraphList paragraphs={paragraphs} />}
        {!isLoading && !hasText && (
          <Typography variant="body" color="secondary">
            Your personalized job application will appear here...
          </Typography>
        )}
      </CardContent>

      <CardFooter className={styles.footer}>
        <CopyButton text={copyText} disabled={!hasText || isLoading} />
      </CardFooter>
    </Card>
  );
}
