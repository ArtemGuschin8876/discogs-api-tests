import { expect, Locator, Page } from "@playwright/test";
import { BasePage, LocatorMap } from "./base.page";
import { Environment } from "../../env";
import { Endpoints } from "../../utils/contstants/endpoints";
import { UIDataHelper } from "../ui.utils/ui.data.helper";
import { UITextErrors } from "../ui.utils/constants/ui.text.errors";

export class LoginPage extends BasePage{

    private urlLoginPage: string;
    private fiedls: LocatorMap;
    private buttons: LocatorMap;
    private errors: LocatorMap;
    

    constructor(page: Page) {
        super(page)
        this.urlLoginPage = `${Environment.BASE_UI_URL}${Endpoints.LOGIN}`

        this.fiedls = {
            usernameField: this.page.locator('#username'),
            passwordField: this.page.locator('#password'),
        },

        this.errors = {
            messageTextUnknownCredentials: this.page.locator('#error-element-password'),
        }

        this.buttons = {
            continueBtn: this.page.locator('button[type=submit][name=action]', {hasText: 'Continue'}),
        }
    }

    async goto() {
        await this.gotoByUrl(this.urlLoginPage);
    }

    async enterLoginCredentialsAndClickContinue(flag: string) {

        if (flag === 'positive') {
            await this.fiedls.usernameField.pressSequentially(`${Environment.USER_NAME}`);
            await this.fiedls.passwordField.pressSequentially(`${Environment.USER_PASSWORD}`);
            await this.buttons.continueBtn.click();

        } else if (flag === 'negative') {
            await this.fiedls.usernameField.pressSequentially(UIDataHelper.generateUnknownCredentials().username);
            await this.fiedls.passwordField.pressSequentially(UIDataHelper.generateUnknownCredentials().password);
            await this.buttons.continueBtn.click();

        } else {
            console.log('Invalid flag');
        }
    };

    async checkErrorMessage() {
        await this.page.waitForSelector('#error-element-password', {timeout: 5000});
        expect(this.errors.messageTextUnknownCredentials).toBeVisible();
        expect(this.errors.messageTextUnknownCredentials).toHaveText(UITextErrors.UNKNOWN_CREDENTIALS)
    }

}