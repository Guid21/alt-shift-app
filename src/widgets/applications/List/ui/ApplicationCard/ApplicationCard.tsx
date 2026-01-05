import type { Application } from '@/entities/application/types';
import { CopyButton } from '@/features/application/copy/ui/CopyButton';
import { DeleteButton } from '@/features/application/delete';
import { Card, CardContent, CardFooter } from '@/shared/ui-kit/Card';
import { ParagraphList } from '@/shared/ui-kit/ParagraphList';
import { Typography } from '@/shared/ui-kit/Typography';

import styles from './ApplicationCard.module.css';
import Link from 'next/link';
import { PATHS } from '@/shared/config/routes';

type ApplicationCardProps = {
  application: Application;
};

export function ApplicationCard({ application }: ApplicationCardProps) {
  const paragraphs = application.generatedText ?? [];
  const copyText = paragraphs.join('\n\n');

  return (
    <Card className={styles.card} fullHeight>
      <CardContent>
        <div className={styles.textWrapper}>
          {paragraphs.length > 0 ? (
            <Link
              href={PATHS.applications.details(application.id)}
              className={styles.paragraphLink}
            >
              <ParagraphList paragraphs={paragraphs} />
            </Link>
          ) : (
            <Typography as="p" variant="body" color="secondary">
              Generated text will appear here...
            </Typography>
          )}
        </div>
      </CardContent>

      <CardFooter>
        <DeleteButton id={application.id} />
        <CopyButton text={copyText} disabled={!paragraphs.length} />
      </CardFooter>
    </Card>
  );
}
