import {chromium,test} from "@playwright/test"

test("login tes",async()=>{

     const browser=await chromium.launch({
        headless:false
     });
     const context=await browser.newContext();
     const page=await context.newPage();
     await page.goto("https://www.facebook.com");
     await page.fill("//input[@id='email']","kashi viswanadh");
     await page.fill("//input[@id='pass']","kalyan chakravarthi");
     await page.click("//button[@name='login']");


})