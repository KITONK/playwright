const { test, expect } = require('@playwright/test');
// const { SignUp } = require('./models/sign_up');

test('test', async ({ page }) => {

    // const signUp = new SignUp(page);

    await page.goto('https://www.demoblaze.com');

    await page.click('#signin2');

    await page.fill('#sign-username', 'admin');
    await page.fill('#sign-password', 'admin');

    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });

     await page.click('button:has-text("Sign up")');
     
});