import { z } from 'zod';

import type { Application } from '../types';

const requiredString = (fieldName: string) => z.string().trim().min(1, `${fieldName} is required`);

export const applicationGenerationSchema = z.object({
  jobTitle: requiredString('Job title'),
  company: requiredString('Company'),
  skills: requiredString('Skills'),
  details: requiredString('Details'),
  generatedText: z.array(z.string().trim().min(1)).min(1).optional(),
}) satisfies z.ZodType<Omit<Application, 'id' | 'createdAt'>>;

export type ApplicationGenerationSchema = z.infer<typeof applicationGenerationSchema>;
