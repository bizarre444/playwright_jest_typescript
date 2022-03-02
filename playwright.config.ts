import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  //probably path is incorrect
  globalSetup: require.resolve('./global-setup'),
  use: {
    browserName: 'chromium',
    storageState: 'storageState.json',
  },
};
export default config;