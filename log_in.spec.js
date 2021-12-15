const { test, expect } = require('@playwright/test');
const { LogIn } = require('./page_objects/log_in');

test('test', async ({ page }) => {

  const logIn = new LogIn(page);

  await logIn.homePage();

  await logIn.click('a:has-text("Log in")');
  
  await logIn.logIn('#loginusername', 'admin');
  await logIn.logIn('#loginpassword', 'admin');

  await Promise.all([
    page.waitForNavigation(),
    logIn.click('button:has-text("Log in")')
  ]);
  ;
  await logIn.click('text=Welcome admin');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');

  await logIn.makeScreenshot();
  
});