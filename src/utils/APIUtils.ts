import { APIRequestContext } from "@playwright/test";

class APIUtils {
    readonly apiContext: APIRequestContext;
    readonly loginPayLoad: Object;

    constructor(apiContext: APIRequestContext, loginPayLoad: Object) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    async loginByApi() {
        const loginResponse = await this.apiContext.post("https://www.ka-stage.ml/api/v2/user/login/", { data: this.loginPayLoad });
        const loginResponseJson = await loginResponse.json();
        await this.apiContext.storageState({ path: './state/state.json'});
        return loginResponseJson;
    }
}

export default APIUtils;