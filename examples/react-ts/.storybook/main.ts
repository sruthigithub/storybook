import type { StorybookConfig } from '@storybook/react-webpack5/types';

const config: StorybookConfig = {
  stories: [
    {
      directory: '../src/title',
      titlePrefix: 'Custom Prefix',
    },
    {
      directory: '../src',
      titlePrefix: 'Demo',
      files: '*.stories.(js|ts|tsx|mdx)',
    },
    {
      directory: '../src/addon-docs',
      files: '*.stories.mdx',
    },
  ],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-storyshots',
    '@storybook/addon-a11y',
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgenTypescriptOptions: {
      propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
    },
  },
  core: {
    channelOptions: { allowFunction: false, maxDepth: 10 },
    disableTelemetry: true,
  },
  features: {
    postcss: false,
    storyStoreV7: !global.navigator?.userAgent?.match?.('jsdom'),
    buildStoriesJson: true,
    babelModeV7: true,
    warnOnLegacyHierarchySeparator: false,
    previewMdx2: true,
    breakingChangesV7: true,
  },
  framework: '@storybook/react-webpack5',
  // core: (c: any = {}) => {
  //   return {
  //     channelOptions: { allowFunction: false, maxDepth: 10 },
  //     disableTelemetry: true,
  //     ...c,
  //   };
  // },
  refs: {
    '64': {
      title: '6.4',
      url: 'http://localhost:6006',
    },
  },
};
module.exports = config;
