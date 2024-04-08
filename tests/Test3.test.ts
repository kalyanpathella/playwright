import {test,firefox}from "@playwright/test"
test("home page test",async()=>{
    const browser=await firefox.launch({
         headless:false
    });
    const contex=await browser.newContext();
    const page=await contex.newPage();
    await page.goto("https://www.amazon.in");
    await page.hover("//span[text()='Hello, sign in']/parent::div/parent::a");
    await page.click("//span[text()='Sign in']/parent::a[@rel='nofollow']");
    await page.fill("//input[@id='ap_email']","+919032042174");
    await page.click("//input[@id='continue']");
    await page.fill("//input[@id='ap_password']","11KK1a0324@");
    
})