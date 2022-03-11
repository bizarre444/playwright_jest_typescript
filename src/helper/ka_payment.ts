import { Payment } from '../helper/kidsacasdemy'

let payment: Payment = {
    url: 'https://www.ka-stage.ml/subscription-plans/',
    first_plan: '//*[@id="1-step-sample"]/ul/li[1]/div',
    second_plan: '//*[@id="1-step-sample"]/ul/li[2]/div',
    submit_btn: '.subscription-plans-sample__controls-btn',
    container: '.subscription-plans-sample__payment-container',
    period: '//*[@id="2-step-sample"]//*[@data-selector = "plan-period-value"]',
    price: '//*[@id="2-step-sample"]//*[@data-selector = "plan-full-price-value"]',
    back_btn: '//*[@id="2-step-sample"]//*[@data-selector="back-to-prev-section-btn"]',
    trial: '//*[@id="2-step-sample"]//*[@data-selector="plan-trial-period-value"]',
    total: '//*[@id="2-step-sample"]//*[@data-selector="plan-total-price-value"]',
    discount: '//*[@id="2-step-sample"]//*[@data-selector="plan-discount-value"]'
}


export default payment;