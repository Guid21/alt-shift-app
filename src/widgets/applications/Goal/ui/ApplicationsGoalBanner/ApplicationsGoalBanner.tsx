import { ProgressStatus } from '@/shared/ui-kit/ProgressStatus';

import styles from './ApplicationsGoalBanner.module.css';
import Link from 'next/link';
import { Button } from '@/shared/ui-kit/Button';
import { PATHS } from '@/shared/config/routes';
import { Card } from '@/shared/ui-kit/Card';
import { Typography } from '@/shared/ui-kit/Typography';

type ApplicationsGoalBannerProps = {
  title?: string;
  description?: string;
  current: number;
  target: number;
};

export function ApplicationsGoalBanner({
  title = 'Hit your goal',
  description = 'Generate and send out couple more job applications today to get hired faster ',
  current,
  target,
}: ApplicationsGoalBannerProps) {
  return (
    <Card padding="lg" variant="accent">
      <div className={styles.content}>
        <div className={styles.header}>
          <Typography as="h2" variant="heading-md-semibold" color="primary">
            {title}
          </Typography>
          <Typography as="p" variant="body" color="secondary">
            {description}
          </Typography>

          <Link href={PATHS.applications.create} aria-label="Create new application">
            <Button leftIcon="plus" size="lg">
              Create New
            </Button>
          </Link>
        </div>

        <div className={styles.progress} aria-label="Applications goal progress">
          <ProgressStatus current={current} total={target} variant="segments" />
          <Typography variant="body" color="secondary">
            {current} out of {target}
          </Typography>
        </div>
      </div>
    </Card>
  );
}
