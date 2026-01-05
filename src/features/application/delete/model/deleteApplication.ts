import { useDocumentsStore } from '@/entities/document/store';

export function deleteApplication(id: string): void {
  if (!id) return;
  useDocumentsStore.getState().remove(id);
}
