import { PATHS } from '@/shared/config/routes';
import { IconButton } from '@/shared/ui-kit/Button';
import Link from 'next/link';

export function HomeButton() {
  return (
    <Link href={PATHS.root} aria-label="Go to home">
      <IconButton icon="home" aria-label="Go to home" variant="secondary" as="span" />
    </Link>
  );
}
