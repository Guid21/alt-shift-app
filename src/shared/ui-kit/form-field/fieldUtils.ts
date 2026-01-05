import type React from 'react';

type FieldControlParams<T> = {
  error?: React.ReactNode;
  props: T;
};

export function getFieldControlProps<T extends Record<string, unknown>>({
  error,
  props,
}: FieldControlParams<T>) {
  const controlProps = props;
  const hasError = Boolean(error);

  return {
    hasError,
    controlProps,
  };
}
