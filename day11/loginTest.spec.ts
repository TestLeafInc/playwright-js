import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { test } from "@playwright/test";
 
const records = parse(fs.readFileSync(path.join(__dirname, 'loginData.csv')), {
    columns: true,
    skip_empty_lines: true
  });
  for (const record of records){
test(`Login from ${record.test_case}`,async ({page}) => {
   

 
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", record.username);
    await page.fill("#password", record.password);
    await page.click("#Login");
   // await page.close();
   
});
  }