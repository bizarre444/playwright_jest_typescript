import {test, expect} from "@playwright/test";
import { PaymentPage } from "../pages/Payment";

const url = require("../helper/config").url;
const subUrl = require("../helper/config").subUrl;
const {payment} = require("../helper/config").selectors;
import quarterly from '../helper/plans/quarterly';
import yearly from '../helper/plans/yearly';
import coupon_free from '../helper/plans/coupon_free';

let homepage: any;

test.afterEach(async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);
  
    if (testInfo.status !== testInfo.expectedStatus)
      console.log(`Did not run as expected, ended up at ${page.url()}`);
});

test.beforeEach(async ({ browser }) => {  
    const page = await browser.newPage();
    homepage = new PaymentPage(page);
    await page.goto(url + subUrl);
    //need fix - browser open new tab
});
  
test.afterAll(async () => {
    
});

test.describe('Payment tests', () => {
    test('Check correct data without trial and coupon', async({page}) => {
        test.slow();
        //const homepage = new PaymentPage(page);

        //await homepage.open(url + subUrl);
        await homepage.chooseSecondPlan();
        //check period
        const period = await homepage.getInnerText(payment.period);
        expect(period).toEqual(quarterly.name);
        //check price
        const price = await homepage.getInnerText(payment.price);
        expect(price).toEqual(quarterly.price);
        //check total
        const total = await homepage.getInnerText(payment.total);
        expect(total).toEqual(quarterly.total);
        
    });

    test('Check correct data with trial', async({page}) => {
        test.slow();
        // const homepage = new PaymentPage(page);

        // await homepage.open(url + subUrl);
        await homepage.chooseFirstPlan();
        //check period
        const period = await homepage.getInnerText(payment.period);
        expect(period).toEqual(yearly.name);
        //check price
        const price = await homepage.getInnerText(payment.price);
        expect(price).toEqual(yearly.price);
        //check trial
        const trial = await homepage.getInnerText(payment.trial);
        expect(trial).toEqual(yearly.trial);
        //check total
        const total = await homepage.getInnerText(payment.total);
        expect(total).toEqual(yearly.total);
    });

    test('Check correct data with coupon', async({page}) => {
        test.slow();
        // const homepage = new PaymentPage(page);

        // await homepage.open(url + subUrl);
        await homepage.chooseCoupon(coupon_free.name);
        await homepage.chooseFirstPlan();
        //check period
        const period = await homepage.getInnerText(payment.period);
        expect(period).toEqual(yearly.name);
        //check price
        const price = await homepage.getInnerText(payment.price);
        expect(price).toEqual(yearly.price);
        //check trial
        const trial = await homepage.getInnerText(payment.trial);
        expect(trial).toEqual(coupon_free.trial);
        //check total
        const total = await homepage.getInnerText(payment.total);
        expect(total).toEqual(yearly.total);
        //check discount
        const discount = await homepage.getInnerText(payment.discount);
        expect(discount).toEqual(coupon_free.discount);
    });
})