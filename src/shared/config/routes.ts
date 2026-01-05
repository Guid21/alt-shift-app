export const PATHS = {
  root: '/applications',
  applications: {
    root: '/applications',
    create: '/applications/new',
    details: (id: string) => `/applications/${id}`,
  },
};
