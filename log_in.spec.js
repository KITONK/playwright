const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/');

  await page.click('a:has-text("Log in")');
  
  await page.fill('#loginusername', 'admin');
  await page.fill('#loginpassword', 'admin');

  await Promise.all([
    page.waitForNavigation(),
    page.click('button:has-text("Log in")')
  ]);
  ;
  await page.click('text=Welcome admin');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');
  
});