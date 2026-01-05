'use client';

import type { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <Toaster richColors position="top-right" />
      {children}
    </>
  );
}
