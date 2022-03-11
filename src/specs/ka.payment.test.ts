import payment from '../helper/ka_payment';
import quarterly from '../helper/plans/quarterly';
import yearly from '../helper/plans/yearly';
import coupon_free from '../helper/plans/coupon_free';

describe(`Payment test`, () => {

    it('Check correct data without trial and coupon', async () => {
        await page.goto(payment.url);
        //choose second plan(without trial)
        await page.click(payment.second_plan);
        //await page.waitForTimeout(2000);
        //take screenshot with Quaterly plan
        await page.screenshot({
            path: './screenshots/' + quarterly.name + '.png',
            fullPage: true
        })
        //click Submit button
        await page.click(payment.submit_btn);
        //await page.waitForTimeout(2000);
        await page.waitForSelector(payment.container);
        //take screenshot payment step
        await page.screenshot({
            path: './screenshots/payment.png',
            fullPage: true
        });
        //check period
        let period: string = await page.innerText(payment.period);
        //console.log(period);
        expect(period).toEqual(quarterly.name);
        //check price
        let price: string = await page.innerText(payment.price);
        //console.log(price);
        expect(price).toEqual(quarterly.price);
        //check total
        let total: string = await page.innerText(payment.total);
        //console.log(total);
        expect(total).toEqual(quarterly.total);
    })

    it('Check data with trial', async () => {
        //back to subs-plan page
        await page.click(payment.back_btn);
        await page.waitForTimeout(2000);
        //choose first plan
        await page.click(payment.first_plan);
        //click Submit button
        await page.click(payment.submit_btn);
        //wait payment page
        await page.waitForSelector(payment.container);
        //check period
        let period: string = await page.innerText(payment.period);
        //console.log(period);
        expect(period).toEqual(yearly.name);
        //check price
        let price: string = await page.innerText(payment.price);
        //console.log(price);
        expect(price).toEqual(yearly.price);
        //check trial duration
        let trial: string = await page.innerText(payment.trial);
        //console.log(trial);
        expect(trial).toEqual(yearly.trial);
        //check total
        let total: string = await page.innerText(payment.total);
        //console.log(total);
        expect(total).toEqual(yearly.total);
    })

    it('Check data with coupon', async () => {
         //back to subs-plan page
         await page.click(payment.back_btn);
         await page.waitForTimeout(2000);
         //choose first plan
        await page.click(payment.first_plan);
        //open coupon input
        await page.click(coupon_free.block_coupon);
        await page.click(coupon_free.input_coupon);
        await page.type(coupon_free.input_coupon, coupon_free.name);
        await page.press(coupon_free.input_coupon, 'Enter');
        await page.waitForSelector(coupon_free.message_coupon);
        //click Submit button
        await page.click(payment.submit_btn);
        //wait payment page
        await page.waitForSelector(payment.container);
        //check period
        let period: string = await page.innerText(payment.period);
        //console.log(period);
        expect(period).toEqual(yearly.name);
        //check price
        let price: string = await page.innerText(payment.price);
        //console.log(price);
        expect(price).toEqual(yearly.price);
        //check trial duration
        let trial: string = await page.innerText(payment.trial);
        //console.log(trial);
        expect(trial).toEqual(trial);
        //check total
        let total: string = await page.innerText(payment.total);
        //console.log(total);
        expect(total).toEqual(yearly.total);
        //check discount
        let discount: string = await page.innerText(payment.discount);
        expect(discount).toEqual(coupon_free.discount);
    })

    afterAll(async () => {
        await page.close();
    })
})