import { Registration } from './kidsacasdemy';

let registration: Registration = {
    button_signup: 'text=Sign up',
    start_btn: 'body > div.content > div > div.container > div.sign-up-page__container._parent > div.sign-up-page__right > div.sign-up-page__right-top > div.sign-up-page__parent-next-btn > button',
    grade: 'body > div.content > div > div.kid-profile-create-page__content > div.kid-profile-create-page__step._grades > div > div.kid-profile-create-page__grades > div:nth-child(2)',
    subject: 'body > div.content > div > div.kid-profile-create-page__content > div.kid-profile-create-page__step._grades > div > div.kid-profile-create-page__subjects-wrapper > div.kid-profile-create-page__subjects > div:nth-child(4) > label',
    next_btn: 'body > div.content > div > div.kid-profile-create-page__content > div.kid-profile-create-page__step._grades > div > div.kid-profile-create-page__btns > button',
    learning_btn: 'body > div.content > div > div.kid-profile-create-page__content > div.kid-profile-create-page__step._kid-profile-details > div.kid-profile-create-page__bottom > div > div.kid-profile-create-page__btns._kid-card > button'

}

export default registration;