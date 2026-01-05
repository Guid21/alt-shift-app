import React from 'react';
import classNames from 'classnames';

import { Typography } from '@/shared/ui-kit/Typography';

import styles from './paragraph-list.module.css';

type ParagraphListProps = {
  paragraphs: string[];
  className?: string;
  paragraphClassName?: string;
};

export function ParagraphList({ paragraphs, className, paragraphClassName }: ParagraphListProps) {
  return (
    <div className={classNames(styles.paragraphs, className)}>
      {paragraphs.map((paragraph, index) => (
        <Typography
          key={index}
          as="p"
          variant="body"
          color="secondary"
          className={classNames(styles.paragraph, paragraphClassName)}
        >
          {paragraph}
        </Typography>
      ))}
    </div>
  );
}
