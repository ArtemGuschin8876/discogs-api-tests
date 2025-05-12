import { expect, Locator, Page } from "@playwright/test";
import { LocatorMap } from "./base.page";
import { Environment } from "../../env";

export class LoginPage {
    private page: Page;
    private fiels: LocatorMap;
    private buttons: LocatorMap;

    constructor(page: Page) {
        this.page = page;

        this.fiels = {
            usernameField: this.page.locator('#username'),
            passwordField: this.page.locator('#password'),
        },

        this.buttons = {
            continueBtn: this.page.locator('button[type=submit]', {hasText: 'Continue'}),
        }
    }

    async enterLoginCredentialsAndClickContinue() {
        await this.fiels.usernameField.pressSequentially(`${Environment.USER_NAME}`);
        await this.fiels.passwordField.pressSequentially(`${Environment.USER_PASSWORD}`);
        await this.buttons.continueBtn.click();
    }

}