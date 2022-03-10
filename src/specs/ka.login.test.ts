import main from '../helper/ka_main';
import login from '../helper/login';

describe(`Test Login-logout part`, () => {

    it('Login from Main page - popup is visible', async ()=> {
        await page.goto(main.url);
        await page.click('text=' + login.text);
        await page.waitForTimeout(1000);
        const title = await page.innerText(login.title_tag);
        expect(title).toContain(login.text);
        //take screenshot
        await page.screenshot({
            path: './screenshots/popup.png',
            fullPage: true
        });
    })

    it('Login with incorrect creds', async () => {
        await page.click(login.email_input);
        await page.type(login.email_input, login.email);
        await page.click(login.password_input);
        await page.type(login.password_input, '123456');
        await page.click(login.button);
        await page.waitForTimeout(5000);
        let message = await page.innerText(login.error);
        console.log(message);
        expect(message).toEqual('Email or password is invalid');
    })

    it('Login with correct creds', async () => {
        await page.goto(main.url);
        await page.click('text=' + login.text);
        await page.waitForTimeout(1000);
        await page.click(login.email_input);
        await page.type(login.email_input, login.email);
        await page.click(login.password_input);
        await page.type(login.password_input, login.password);
        await page.click(login.button);
        await page.waitForTimeout(5000);
        let url = await page.url();
        console.log(url);
        expect(url).toEqual(login.success_url);
    })

    afterAll(async () => {
        await page.close();
    })
})