const { test, expect } = require('@playwright/test');
const { SingUp, SignUp } = require('./page_objects/sign_up');

test('test', async ({ page }) => {

    const signUp = new SignUp(page);

    await signUp.homePage();

    await signUp.click('a:has-text("Sign Up")');

    await signUp.signUp('#sign-username', 'admin');
    await signUp.signUp('#sign-password', 'admin');

    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });

     await page.click('button:has-text("Sign up")');
     
     await signUp.makeScreenshot();
});