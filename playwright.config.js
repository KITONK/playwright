const { devices } = require('@playwright/test');

const config = {
  use: {
    trace: 'on',
	video: 'on'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
};
module.exports = config;