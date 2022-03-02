

describe(`Main page title`, () => {
    it('Correct title', async () => {
        await page.goto('https://www.ka-stage.ml/');
        const title = await page.innerText('.home-main-section__title');
        let titleExp = "With Kids Academy, All Eyes Are Glued on Learning!";
        expect(title).toBe(titleExp);
    });
})
