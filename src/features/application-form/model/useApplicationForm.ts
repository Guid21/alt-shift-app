'use client';

import { useCallback, useMemo } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import type { ApplicationGenerationInput } from '@/features/application/generate/model/useGenerateApplication';

import {
  APPLICATION_FORM_LIMITS,
  applicationFormDefaults,
  applicationFormSchema,
  type ApplicationFormValues,
} from '../schema/applicationForm.schema';
import { mapToGenerationInput } from './mapToGenerationInput';

type CharacterCounts = Record<
  keyof ApplicationFormValues,
  { valueLength: number; maxLength: number; isOverLimit: boolean }
>;

type UseApplicationFormParams = {
  initialValues?: Partial<ApplicationFormValues>;
};

function getCharacterCount(value: string = '', maxLength: number) {
  const valueLength = value.length;

  return {
    valueLength,
    maxLength,
    isOverLimit: valueLength > maxLength,
  };
}

export function useApplicationForm({ initialValues }: UseApplicationFormParams = {}) {
  const form = useForm<ApplicationFormValues>({
    resolver: zodResolver(applicationFormSchema),
    defaultValues: { ...applicationFormDefaults, ...initialValues },
    mode: 'onTouched',
  });

  const watchedValues = form.watch();

  const characterCounts = useMemo<CharacterCounts>(
    () => ({
      jobTitle: getCharacterCount(
        watchedValues.jobTitle,
        APPLICATION_FORM_LIMITS.jobTitle.maxLength
      ),
      company: getCharacterCount(watchedValues.company, APPLICATION_FORM_LIMITS.company.maxLength),
      skills: getCharacterCount(watchedValues.skills, APPLICATION_FORM_LIMITS.skills.maxLength),
      details: getCharacterCount(watchedValues.details, APPLICATION_FORM_LIMITS.details.maxLength),
    }),
    [watchedValues.jobTitle, watchedValues.company, watchedValues.skills, watchedValues.details]
  );

  const canGenerate = form.formState.isValid && !form.formState.isSubmitting;

  const resetForm = useCallback(() => form.reset(applicationFormDefaults), [form]);

  const prefill = useCallback(
    (values: Partial<ApplicationFormValues>) => {
      form.reset({ ...applicationFormDefaults, ...values });
    },
    [form]
  );

  const toGenerationInput = useCallback(
    (): ApplicationGenerationInput => mapToGenerationInput(form.getValues()),
    [form]
  );

  return {
    form,
    errors: form.formState.errors,
    isValid: form.formState.isValid,
    characterCounts,
    canGenerate,
    resetForm,
    prefill,
    toGenerationInput,
  };
}
