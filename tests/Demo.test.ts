import {test,expect} from '@playwright/test'
test("login form test", async({page})=>{
      await page.goto("https://www.demoblaze.com/");
      await page.click("#login2");
      await page.fill("#loginusername","kashiviswanadh");
      await page.fill("#loginpassword","9032042174");
      await page.click("//button[text()='Log in']");


})