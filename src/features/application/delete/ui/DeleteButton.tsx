'use client';

import { Button } from '@/shared/ui-kit/Button';
import { deleteApplication } from '../model/deleteApplication';

type DeleteButtonProps = {
  id: string;
  onCopied?: () => void;
};

export function DeleteButton({ id, onCopied }: DeleteButtonProps) {
  const handleClick = async () => {
    const ok = window.confirm(`Delete this application? This action cannot be undone.`);
    if (!ok) return;
    deleteApplication(id);
    onCopied?.();
  };

  return (
    <Button leftIcon="trash-basket" variant="text" color="danger" onClick={handleClick}>
      Delete
    </Button>
  );
}
