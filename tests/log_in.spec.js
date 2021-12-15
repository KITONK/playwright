const { test, expect } = require('@playwright/test');
const v8toIstanbul = require('v8-to-istanbul')
const { LogIn } = require('../page_objects/log_in');

test('user', async ({ page }) => {

  await page.coverage.startJSCoverage();
  await page.coverage.startCSSCoverage();

  const logIn = new LogIn(page);

  await logIn.homePage();

  await logIn.click('a:has-text("Log in")');
  
  await logIn.logIn('#loginusername', 'admin');
  await logIn.logIn('#loginpassword', 'admin');

  await Promise.all([
    page.waitForNavigation(),
    logIn.click('button:has-text("Log in")')
  ]);
  
  await logIn.click('text=Welcome admin');
  await expect(page).toHaveURL('https://www.demoblaze.com/#');

  expect(await page.screenshot()).toMatchSnapshot('loginsuccess.png');

  const JScoverage = await page.coverage.stopJSCoverage();
    for(const entry of JScoverage){
        const  converter = new v8toIstanbul('', 0, {source: entry.source});
        await converter.load();
        converter.applyCoverage(entry.functions);
        console.log(JSON.stringify(converter.toIstanbul()));
    }
    const CSScoverage = await  page.coverage.stopCSSCoverage();
    for (const entry of CSScoverage){
        console.log(entry.url);
    }
  
});