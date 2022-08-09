import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  retries: 3,
  workers: 2,
  timeout: 5 * 60 * 1000,
  expect: {
    timeout: 5000
  },

  use: {
    browserName: 'chromium',
    headless: false
  },
  reporter: [
    ['line'],
    ['allure-playwright', {
    detail: true,
    suitTitle: false
  }]],
};

export default config;