import { z } from 'zod';

type FieldLimits = {
  minLength: number;
  maxLength: number;
};

export const APPLICATION_FORM_LIMITS: Record<
  'jobTitle' | 'company' | 'skills' | 'details',
  FieldLimits
> = {
  jobTitle: { minLength: 1, maxLength: 120 },
  company: { minLength: 1, maxLength: 120 },
  skills: { minLength: 2, maxLength: 300 },
  details: { minLength: 10, maxLength: 1200 },
};

function createFieldSchema(fieldName: string, limits: FieldLimits) {
  const minMessage =
    limits.minLength > 1
      ? `${fieldName} must be at least ${limits.minLength} characters`
      : `${fieldName} is required`;

  return z
    .string()
    .trim()
    .min(limits.minLength, minMessage)
    .max(limits.maxLength, `${fieldName} must be ${limits.maxLength} characters or fewer`);
}

export const applicationFormSchema = z.object({
  jobTitle: createFieldSchema('Job title', APPLICATION_FORM_LIMITS.jobTitle),
  company: createFieldSchema('Company', APPLICATION_FORM_LIMITS.company),
  skills: createFieldSchema('Skills', APPLICATION_FORM_LIMITS.skills),
  details: createFieldSchema('Details', APPLICATION_FORM_LIMITS.details),
});

export type ApplicationFormValues = z.infer<typeof applicationFormSchema>;

export const applicationFormDefaults: ApplicationFormValues = {
  jobTitle: '',
  company: '',
  skills: '',
  details: '',
};
