import main from '../helper/ka_main';
import registration from '../helper/ka_registration'

describe(`Registration test`, () => {

    it('Registration flow from Main page', async () => {
        await page.goto(main.url);
        await page.click(registration.button_signup);
        //TODO: add check for Parent check-box
        await page.waitForTimeout(2000);
        await page.click(registration.start_btn);
        //click grade
        await page.click(registration.grade);
        //await page.waitForTimeout(2000);
        await page.screenshot({
            path: './screenshots/reg_1.png',
            fullPage: true
        });
        //click subject
        await page.click(registration.subject);
        //await page.waitForTimeout(2000);
        await page.screenshot({
            path: './screenshots/reg_2.png',
            fullPage: true
        });
        //click Next button
        await page.click(registration.next_btn);
        //await page.waitForTimeout(2000);
        //take screenshot step two
        await page.screenshot({
            path: './screenshots/reg_3.png',
            fullPage: true
        });
        //click Start learning button
        await page.click(registration.learning_btn);
        //await page.waitForTimeout(2000);
        //take screenshot subscription plans page
        await page.screenshot({
            path: './screenshots/sub-plan.png',
            fullPage: true
        })
    })

    //TODO chess flow
})