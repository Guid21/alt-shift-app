'use client';

import React from 'react';

import type { Application } from '@/entities/application/types';
import { documentToApplication, isApplicationDocument } from '@/entities/application/adapter';
import { useDocumentsStore } from '@/entities/document/store';
import {
  APPLICATION_FORM_LIMITS,
  useApplicationForm,
  type ApplicationFormValues,
} from '@/features/application-form';
import { createApplication } from '@/features/application/create';
import { GenerateButton, useGenerationApplication } from '@/features/application/generate';
import { updateApplication } from '@/features/application/update';
import { FormFieldInput, FormFieldTextArea } from '@/shared/ui-kit/form-field';
import { Typography } from '@/shared/ui-kit/Typography';
import { toast } from 'sonner';

import { ApplicationPreview } from '../ApplicationPreview/ApplicationPreview';
import styles from './ApplicationGenerator.module.css';

type ApplicationGeneratorProps = {
  applicationId?: string;
};

type ApplicationGeneratorFormProps = {
  pageTitle: string;
  hasFilledTitle: boolean;
  form: ReturnType<typeof useApplicationForm>['form'];
  errors: ReturnType<typeof useApplicationForm>['errors'];
  onSubmit: (event?: React.BaseSyntheticEvent) => Promise<void>;
  canGenerate: boolean;
  isGenerating: boolean;
  hasGeneratedText: boolean;
};

function mapApplicationToFormValues(
  application?: Application
): Partial<ApplicationFormValues> | undefined {
  if (!application) return undefined;

  const { jobTitle, company, skills, details } = application;
  return { jobTitle, company, skills, details };
}

export function ApplicationGenerator({ applicationId }: ApplicationGeneratorProps) {
  const [activeApplicationId, setActiveApplicationId] = React.useState<string | undefined>(
    applicationId
  );

  React.useEffect(() => {
    setActiveApplicationId(applicationId);
  }, [applicationId]);

  const activeDocument = useDocumentsStore((state) => {
    if (!activeApplicationId) return undefined;

    return state.documents.find(
      (item) => item.id === activeApplicationId && isApplicationDocument(item)
    );
  });

  const activeApplication = React.useMemo(
    () =>
      activeDocument && isApplicationDocument(activeDocument)
        ? documentToApplication(activeDocument)
        : undefined,
    [activeDocument]
  );

  const { form, errors, canGenerate, prefill, toGenerationInput } = useApplicationForm({
    initialValues: mapApplicationToFormValues(activeApplication),
  });

  React.useEffect(() => {
    if (activeApplication) {
      prefill(mapApplicationToFormValues(activeApplication) ?? {});
    }
  }, [activeApplication, prefill]);

  const handleCreateApplication = React.useCallback<
    (payload: Parameters<typeof createApplication>[0], id?: string) => Application
  >((payload, id) => {
    const created = createApplication(payload, id);
    setActiveApplicationId(created.id);
    return created;
  }, []);

  const handleUpdateApplication = React.useCallback(
    (payload: Parameters<typeof updateApplication>[0]) => {
      const updated = updateApplication(payload);
      return updated;
    },
    []
  );

  const handleGenerationError = React.useCallback((message: string) => {
    toast.error(message);
  }, []);

  const generate = useGenerationApplication({
    id: activeApplicationId,
    onError: handleGenerationError,
    updateApplication: handleUpdateApplication,
    createApplication: handleCreateApplication,
  });

  const handleGenerate = form.handleSubmit(async () => {
    await generate(toGenerationInput());
  });

  const isGenerating = form.formState.isSubmitting;
  const hasGeneratedText = (activeApplication?.generatedText?.length ?? 0) > 0;

  const watchedJobTitle = form.watch('jobTitle');
  const watchedCompany = form.watch('company');
  const hasJobTitle = watchedJobTitle || watchedCompany;
  const hasFilledTitle = Boolean(hasJobTitle);
  const previewRef = React.useRef<HTMLDivElement | null>(null);
  const previousIsGeneratingRef = React.useRef(false);
  const pageTitle = hasJobTitle
    ? `${watchedJobTitle}${watchedJobTitle && watchedCompany ? ', ' : ''}${watchedCompany}`
    : 'New application';

  React.useEffect(() => {
    const wasGenerating = previousIsGeneratingRef.current;
    if (wasGenerating && !isGenerating && hasGeneratedText) {
      previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    previousIsGeneratingRef.current = isGenerating;
  }, [hasGeneratedText, isGenerating]);

  return (
    <div>
      <div className={styles.layout}>
        <ApplicationGeneratorForm
          pageTitle={pageTitle}
          hasFilledTitle={hasFilledTitle}
          form={form}
          errors={errors}
          onSubmit={handleGenerate}
          canGenerate={canGenerate}
          isGenerating={isGenerating}
          hasGeneratedText={hasGeneratedText}
        />
        <div className={styles.preview} ref={previewRef}>
          <ApplicationPreview text={activeApplication?.generatedText} isLoading={isGenerating} />
        </div>
      </div>
    </div>
  );
}

function ApplicationGeneratorForm({
  pageTitle,
  hasFilledTitle,
  form,
  errors,
  onSubmit,
  canGenerate,
  isGenerating,
  hasGeneratedText,
}: ApplicationGeneratorFormProps) {
  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.titleWrapper}>
        <Typography
          as="h1"
          variant="heading-md-semibold"
          color={hasFilledTitle ? 'primary' : 'secondary'}
          className={styles.title}
        >
          {pageTitle}
        </Typography>
      </div>

      <div className={styles.fields}>
        <div className={styles.inlineFields}>
          <FormFieldInput
            label="Job title"
            placeholder="Product manager"
            id="jobTitle"
            maxLength={APPLICATION_FORM_LIMITS.jobTitle.maxLength}
            {...form.register('jobTitle')}
            hideErrorMessage
            error={errors.jobTitle?.message}
          />
          <FormFieldInput
            label="Company"
            placeholder="Apple"
            id="company"
            maxLength={APPLICATION_FORM_LIMITS.company.maxLength}
            {...form.register('company')}
            hideErrorMessage
            error={errors.company?.message}
          />
        </div>

        <FormFieldInput
          label="I am good at..."
          placeholder="HTML, CSS and doing things in time"
          id="skills"
          maxLength={APPLICATION_FORM_LIMITS.skills.maxLength}
          {...form.register('skills')}
          hideErrorMessage
          error={errors.skills?.message}
        />

        <FormFieldTextArea
          label="Additional details"
          placeholder="Describe why you are a great fit or paste your bio"
          id="details"
          maxLength={APPLICATION_FORM_LIMITS.details.maxLength}
          {...form.register('details')}
          hideErrorMessage
          error={errors.details?.message}
          className={styles.additionalDetails}
        />
      </div>

      <GenerateButton
        disabled={!canGenerate}
        loading={isGenerating}
        variant={hasGeneratedText ? 'regenerate' : 'generate'}
        size="lg"
        type="submit"
      />
    </form>
  );
}
