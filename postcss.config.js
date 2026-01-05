module.exports = {
  plugins: {
    'postcss-import': {},
    '@csstools/postcss-global-data': {
      files: ['./src/shared/brand/styles/custom-media.css'],
    },
    'postcss-preset-env': {
      stage: 3,
      autoprefixer: {
        flexbox: 'no-2009',
      },
      features: {
        'custom-properties': false,
        'custom-media-queries': {
          preserve: false,
        },
      },
    },
  },
};
