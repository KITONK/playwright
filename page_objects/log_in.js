class LogIn {

    constructor(page) {
        this.page = page;
    }

    async homePage() {
        await this.page.goto('https://www.demoblaze.com/');
    }

    async click(text) {
        await this.page.click(text);
    }

    async logIn(key, value) {
        await this.page.fill(key, value);
    }

    async makeScreenshot() {
        await this.page.screenshot({ path: 'test-results/login-test-chromium/loginsuccess.png' });
    }    
}
module.exports = {LogIn};