import {test,expect  } from "@playwright/test";
import path from "path";

test.only("Testing file download",async ({page}) => {

    await page.goto("https://leafground.com/file.xhtml");
    const fileDownloadPromise = page.waitForEvent('download');
   await page.getByRole('button', {name:'Download'}).click();
    const fileDownloader = await fileDownloadPromise;
    await fileDownloader.saveAs(path.join("downloads/"+fileDownloader.suggestedFilename()));
  
    await page.waitForTimeout(5000);
})