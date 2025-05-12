import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";
import { MainPage } from "./main.page";

export class PageManager {
    readonly loginPage: LoginPage;
    readonly mainPage: MainPage;


    constructor(private readonly page: Page) {
        this.loginPage = new LoginPage(page);
        this.mainPage = new MainPage(page);
    }


}