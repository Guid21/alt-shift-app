import type { ApplicationGenerationInput } from '@/features/application/generate/model/useGenerateApplication';

import type { ApplicationFormValues } from '../schema/applicationForm.schema';

export function mapToGenerationInput(values: ApplicationFormValues): ApplicationGenerationInput {
  const { jobTitle, company, skills, details } = values;

  return {
    jobTitle: jobTitle.trim(),
    company: company.trim(),
    skills: skills.trim(),
    details: details.trim(),
  };
}
