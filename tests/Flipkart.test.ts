import {chromium,test}from "@playwright/test"
import { Console } from "console";
test("flipkart home page validation",async()=>{

    const browser = await chromium.launch({headless:false});
    const context=await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://www.flipkart.com");
    await page.fill("//input[@name='q']","iphone 13");
    await page.press("//input[@name='q']","Enter");
   const allmobiles= await page.$$("//div[text()='Newest First']/following::div[@class='_1AtVbE col-12-12']");
   console.log(allmobiles.length);

})