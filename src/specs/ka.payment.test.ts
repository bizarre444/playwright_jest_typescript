describe(`Payment test`, () => {

    it('Check correct data without trial and coupon', async () => {
        await page.goto('https://www.ka-stage.ml/subscription-plans/');
        //choose second plan(without trial)
        await page.click('//*[@id="1-step-sample"]/ul/li[2]/div');
        //await page.waitForTimeout(2000);
        //take screenshot with Quaterly plan
        await page.screenshot({
            path: './screenshots/quaterly.png',
            fullPage: true
        })
        //click Submit button
        await page.click('.subscription-plans-sample__controls-btn');
        //await page.waitForTimeout(2000);
        await page.waitForSelector('.subscription-plans-sample__payment-container');
        //take screenshot payment step
        await page.screenshot({
            path: './screenshots/payment.png',
            fullPage: true
        });
        //check period
        let period: string = await page.innerText('//*[@id="2-step-sample"]//*[@data-selector = "plan-period-value"]');
        //console.log(period);
        expect(period).toEqual('Quarterly');
        //check price
        let price: string = await page.innerText('//*[@id="2-step-sample"]//*[@data-selector = "plan-full-price-value"]');
        //console.log(price);
        expect(price).toEqual('$19.99');
    })

    it('Check data with trial', async () => {
        //back to subs-plan page
        await page.click('//*[@id="2-step-sample"]//*[@data-selector="back-to-prev-section-btn"]');
        await page.waitForTimeout(2000);
        //choose first plan
        await page.click('//*[@id="1-step-sample"]/ul/li[1]/div');
        //click Submit button
        await page.click('.subscription-plans-sample__controls-btn');
        //wait payment page
        await page.waitForSelector('.subscription-plans-sample__payment-container');
        //check period
        let period: string = await page.innerText('//*[@id="2-step-sample"]//*[@data-selector="plan-period-value"]');
        //console.log(period);
        expect(period).toEqual('Yearly');
        //check price
        let price: string = await page.innerText('//*[@id="2-step-sample"]//*[@data-selector="plan-full-price-value"]');
        //console.log(price);
        expect(price).toEqual('$64.99');
        //check trial duration
        let trial: string = await page.innerText('//*[@id="2-step-sample"]//*[@data-selector="plan-trial-period-value"]');
        //console.log(trial);
        expect(trial).toEqual('3 days');
        //check total
        let total: string = await page.innerText('//*[@id="2-step-sample"]//*[@data-selector="plan-total-price-value"]');
        //console.log(total);
        expect(total).toEqual('$0.00');
    })
})