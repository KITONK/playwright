class Categories{ 

    constructor(page) {
        this.page = page;
    }

    async homePage() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async click(text) {
        await this.page.click(text);
      }
      
      async fill(key, value) {
        await this.page.fill(key, value);
      }  
    

    // async addItemToCart() {
    //     await page.click('text=Phones');
    //     await expect(page).toHaveURL('https://www.demoblaze.com/#');

    //     await page.click('text=Nokia lumia 1520');
    //     await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=2');

    //     await page.click('text=Add to cart');
    //     await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=2#');
    
    //     page.once('dialog', dialog => {
    //         console.log(`Dialog message: ${dialog.message()}`);
    //         dialog.dismiss().catch(() => {});
    //     });

    //     await page.click('text=Cart');
    //     await expect(page).toHaveURL('https://www.demoblaze.com/cart.html');
    // }

    // async fillPlaceOrder() {
    //     await page.click('.btn-success:has-text("Place Order")');

    //     await page.fill('#name', 'admin');
    //     await page.fill('#country', 'Ukraine');
    //     await page.fill('#city', 'Kiev');
    //     await page.fill('#card', '123456789012345');
    //     await page.fill('#month', '10');
    //     await page.fill('#year', '2027');

    //     await page.click('text=Purchase');
    //     await page.click('button:has-text("OK")');
    // }

    async makeScreenshot() {
        await this.page.screenshot({ path: 'test-results/categories-test-chromium/categoriessuccess.png' });
    }    
}
module.exports = {Categories};