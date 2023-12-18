import { test, expect, chromium } from "@playwright/test";
import path from "path";

test("Scenario 1 - type = 'file",async ({page}) => {

    // when you have input type = 'file'
    await page.goto("https://leafground.com/file.xhtml");
    const card = page.locator(".card").filter({has:page.getByText("Basic Upload")});
    await page.waitForTimeout(5000);
    //playwrightjstraining/tests/day08/download.jpeg
    await card.locator("input[type='file']").setInputFiles([path.join(__dirname, 'download.jpeg')]);
    await expect(card.locator(".ui-fileupload-filename")).toContainText("download.jpeg ");
    await page.waitForTimeout(5000);
   
})
test.only("Scenario 2 using even handler",async ({page}) => {

    // when you have input type = 'file'
    await page.goto("https://the-internet.herokuapp.com/upload");
    const fileChooserPromise = page.waitForEvent('filechooser', {timeout: 10000});
   await page.locator("#drag-drop-upload").click();
   await page.waitForTimeout(5000);
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles([path.join(__dirname, 'download.jpeg')]);
   await expect(page.locator("#drag-drop-upload")).toHaveClass('dz-success-mark')
    await page.waitForTimeout(5000);
})