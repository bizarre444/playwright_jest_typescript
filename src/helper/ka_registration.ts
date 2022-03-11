import { Registration } from './kidsacasdemy';

let registration: Registration = {
    button_signup: '//*[@id="bs-example-navbar-collapse-1"]//*[@data-locator="sign-up-modal-open-button"]',
    start_btn: '//*[@data-selector="sign-up-parent-btn"]',
    grade: '//*[@data-value="Grade 1"]',
    subject: '//*[@data-selector="subject-checkbox-title"]',
    next_btn: 'button.kid-profile-create-page__next-btn',
    learning_btn: 'text="Start learning!"',
    check_box: 'https://www.ka-stage.ml/sign-up/?placement=header&type=parent'
}

export default registration;