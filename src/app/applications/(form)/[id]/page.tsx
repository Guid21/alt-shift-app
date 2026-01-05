import type { Metadata } from 'next';
import Link from 'next/link';

import { ApplicationGenerator } from '@/widgets/applications';
import { PATHS } from '@/shared/config/routes';
import { Card, CardContent } from '@/shared/ui-kit/Card';
import { Typography } from '@/shared/ui-kit/Typography';
import { Button } from '@/shared/ui-kit/Button';

import styles from './page.module.css';

const defaultDescription =
  'Edit your saved application, regenerate the cover letter with Gemini, or copy the latest draft.';
const notFoundDescription =
  "We couldn't load this application. Start a new cover letter instead.";

type ApplicationDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: ApplicationDetailsPageProps): Promise<Metadata> {
  const { id } = await params;

  if (!id) {
    return {
      title: 'Application not found',
      description: notFoundDescription,
      openGraph: {
        title: 'Application not found',
        description: notFoundDescription,
      },
      twitter: {
        title: 'Application not found',
        description: notFoundDescription,
      },
    };
  }

  const shortId = id.slice(0, 8);
  const title = shortId ? `Edit application ${shortId}` : 'Edit application';

  return {
    title,
    description: defaultDescription,
    openGraph: {
      title,
      description: defaultDescription,
    },
    twitter: {
      title,
      description: defaultDescription,
    },
  };
}

export default async function ApplicationDetailsPage({ params }: ApplicationDetailsPageProps) {
  const id = (await params).id;

  if (!id) {
    return (
      <div className={styles.page}>
        <Card padding="lg">
          <CardContent>
            <Typography as="h1" variant="heading-md-semibold">
              Application not found
            </Typography>
            <Typography variant="body" color="secondary" style={{ marginTop: 'var(--spacing-2)' }}>
              We couldn&apos;t find this application. You can start a new one instead.
            </Typography>

            <Link href={PATHS.applications.create} aria-label="Create new application">
              <Button leftIcon="plus" size="md" style={{ marginTop: 'var(--spacing-5)' }}>
                Create New
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <ApplicationGenerator applicationId={id} />
    </div>
  );
}
