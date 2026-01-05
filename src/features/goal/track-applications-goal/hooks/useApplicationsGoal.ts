import { isApplicationDocument } from '@/entities/application/adapter';
import { useDocumentsStore } from '@/entities/document/store';
import { getApplicationsGoalProgress } from '../model/getApplicationsGoalProgress';

export function useApplicationsGoal() {
  const applicationsCount = useDocumentsStore(
    (state) => state.documents.filter(isApplicationDocument).length
  );

  return getApplicationsGoalProgress(applicationsCount);
}
