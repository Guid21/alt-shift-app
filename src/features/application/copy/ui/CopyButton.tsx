'use client';

import { toast } from 'sonner';
import { Button } from '@/shared/ui-kit/Button';
import { copyApplicationText } from '../model/copyApplicationText';
import styles from './CopyButton.module.css';

type CopyButtonProps = {
  text: string;
  onCopied?: () => void;
  disabled?: boolean;
};

export function CopyButton({ onCopied, text, disabled }: CopyButtonProps) {
  const handleClick = async () => {
    const success = await copyApplicationText(text);
    if (success) {
      toast.success('Copied to clipboard');
      onCopied?.();
    } else {
      toast.error('Failed to copy');
    }
  };

  return (
    <Button rightIcon="copy" variant="text" onClick={handleClick} disabled={disabled}>
      <span className={styles.copyText}>
        Copy<span className={styles.copyTrail}> to clipboard</span>
      </span>
    </Button>
  );
}
