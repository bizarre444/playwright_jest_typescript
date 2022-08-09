import {test, expect, request } from "@playwright/test";
//const { APIUtils } = require('../utils/APIUtils');
const loginPayLoad = { "username": "qa.parent2021@gmail.com", "password": "123456QA" };

//login
test('@API Login by API', async () => {

    const apiContext = await request.newContext();
    const loginResponse = await apiContext.post("https://www.ka-stage.ml/api/v2/user/login/",
        {data: loginPayLoad});
    const loginResponseJson = await loginResponse.json();
    console.log(loginResponseJson);
    expect(loginResponse.status()).toBe(200);
})