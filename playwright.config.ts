import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {

  outputDir: './e2e_screenshots',
  use: {
    headless: false,
    viewport: { width: 1440, height: 800 },
    screenshot: 'only-on-failure', //Only creates empty folder
  },
  projects: [
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
      },
    },
  ],
};

export default config;
