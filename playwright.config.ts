import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  use: {
    browserName: 'chromium',
  },
  reporter: [['html', {open: 'never'}]],
  timeout: 5 * 60 * 1000,
};
export default config;