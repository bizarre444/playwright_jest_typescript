import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  retries: 3,
  workers: 2,
  timeout: 5 * 60 * 1000,
  expect: {
    timeout: 5000
  },

  
  reporter: [
    ['line'],
    ['allure-playwright', {
    detail: true,
    suitTitle: false
  }]],
  projects: [{
    name:'chrome',
    use: {
      browserName: 'chromium',
      headless: false,
      screenshot: "only-on-failure",
      video: 'retain-on-failure',
    }, {
    name:'safari',
    use: {
      browserName: 'webkit',
      headless: false,
      screenshot: "only-on-failure",
      video: 'retain-on-failure',
    }
  }]
};

export default config;