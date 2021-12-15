const { test, expect } = require('@playwright/test');
const { Categories } = require('./page_objects/categories');

test('test', async ({ page }) => {

    const category = new Categories(page);

    await category.homePage();

    await category.click('text=Phones');
    await expect(page).toHaveURL('https://www.demoblaze.com/#');

    await category.click('text=Nokia lumia 1520');
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=2');

    await category.click('text=Add to cart');
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=2#');

    page.once('dialog', dialog => {
		console.log(`Dialog message: ${dialog.message()}`);
		dialog.dismiss().catch(() => {});
	});

    await category.click('text=Cart');
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');

    await category.click('.btn-success:has-text("Place Order")');

    await category.fill('#name', 'admin');
    await category.fill('#country', 'Ukraine');
    await category.fill('#city', 'Kiev');
    await category.fill('#card', '123456789012345');
    await category.fill('#month', '10');
    await category.fill('#year', '2027');

    await category.click('text=Purchase');
	await category.click('button:has-text("OK")');

    await category.makeScreenshot();
});