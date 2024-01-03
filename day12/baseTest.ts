import {Browser, BrowserContext, chromium, Page} from 'playwright'

export class BaseTest {

    browser: Browser|null = null;
    page: Page|null = null;

    async setup(){

        this.browser = await chromium.launch();

    }
    async teardown(){
        if(this.page){
            await this.page.close();
        }
        if(this.browser){
            await this.browser.close();
        }

    }

}