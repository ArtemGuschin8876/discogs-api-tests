import { expect, Locator, Page } from "@playwright/test";
import { BasePage, LocatorMap } from "./base.page";
import { Environment } from "../../env";

export class MainPage extends BasePage{

    private buttons: LocatorMap
    private elements: LocatorMap

    constructor(page: Page) {
        super(page);

        this.buttons = {
            loginBtn: this.page.locator('#log_in_link'),
        },

        this.elements = {
            logo: this.page.locator('#custom-prompt-logo'),
            acceptCookies: this.page.locator('button:has-text("Accept All")'),
            userButton: this.page.locator('button[aria-label^="Logged in as"]'),
        }

    }

    async goto() {
        await this.gotoByUrl(`${Environment.BASE_UI_URL}`);
    }

    async acceptCookie() {
        if (await this.elements.acceptCookies.isVisible()) {
            await this.elements.acceptCookies.click();
        }
    }

    async clickOnLoginButtonAndVerifyRedirect() {
        await this.buttons.loginBtn.click();
        expect(this.elements.logo).toBeVisible();
    }

    async verifyUserAfterLogin(userName: string) {
        expect(this.elements.userButton).toHaveAttribute('aria-label', `Logged in as ${userName}`)
    }
    

}