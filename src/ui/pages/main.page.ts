import { expect, Locator, Page } from "@playwright/test";
import { BasePage, LocatorMap } from "./base.page";
import { Environment } from "../../env";

export class MainPage extends BasePage{

    private urlMainPage: string
    private buttons: LocatorMap
    private elements: LocatorMap

    constructor(page: Page) {
        super(page);

        this.urlMainPage = `${Environment.BASE_UI_URL}`

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
        await this.gotoByUrl(this.urlMainPage);
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
        await this.page.waitForSelector('button[aria-label^="Logged in as"]', { timeout: 5000} )
        expect(this.elements.userButton).toHaveAttribute('aria-label', `Logged in as ${userName}`)
    }
    

}