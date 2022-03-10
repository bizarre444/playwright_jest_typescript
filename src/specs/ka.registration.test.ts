import main from '../helper/ka_main';

describe(`Registration test`, () => {

    it('Registration flow from Main page', async () => {
        await page.goto(main.url);
        await page.click('text=Sign up');
        //TODO: add check for Parent check-box
        await page.waitForTimeout(2000);
        await page.click('body > div.content > div > div.container > div.sign-up-page__container._parent > div.sign-up-page__right > div.sign-up-page__right-top > div.sign-up-page__parent-next-btn > button');
        //click grade
        await page.click('body > div.content > div > div.kid-profile-create-page__content > div.kid-profile-create-page__step._grades > div > div.kid-profile-create-page__grades > div:nth-child(2)');
        //await page.waitForTimeout(2000);
        await page.screenshot({
            path: './screenshots/reg_1.png',
            fullPage: true
        });
        //click subject
        await page.click('body > div.content > div > div.kid-profile-create-page__content > div.kid-profile-create-page__step._grades > div > div.kid-profile-create-page__subjects-wrapper > div.kid-profile-create-page__subjects > div:nth-child(4) > label');
        //await page.waitForTimeout(2000);
        await page.screenshot({
            path: './screenshots/reg_2.png',
            fullPage: true
        });
        //click Next button
        await page.click('body > div.content > div > div.kid-profile-create-page__content > div.kid-profile-create-page__step._grades > div > div.kid-profile-create-page__btns > button');
        //await page.waitForTimeout(2000);
        //take screenshot step two
        await page.screenshot({
            path: './screenshots/reg_3.png',
            fullPage: true
        });
        //click Start learning button
        await page.click('body > div.content > div > div.kid-profile-create-page__content > div.kid-profile-create-page__step._kid-profile-details > div.kid-profile-create-page__bottom > div > div.kid-profile-create-page__btns._kid-card > button');
        //await page.waitForTimeout(2000);
        //take screenshot subscription plans page
        await page.screenshot({
            path: './screenshots/sub-plan.png',
            fullPage: true
        })
    })

    //TODO chess flow
})