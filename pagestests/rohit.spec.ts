import { test, expect, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from 'playwright';
import RohitShetty from "../Pages/RohitShettypage";
  
// const browser = await chromium.launch({headless: false, channel: 'chrome'});
//     const newPage = await browser.newPage();
//     const rohitshetty = new RohitShetty(newPage);

//     const rohitshettypageurl = "https://rahulshettyacademy.com/AutomationPractice/";
test('Suggession Class Example', async ({ page }) => {

    const browser = await chromium.launch({headless: false, channel: 'chrome',slowMo:800});
    const newPage = await browser.newPage();
    const rohitshetty = new RohitShetty(newPage);

    const rohitshettypageurl = "https://rahulshettyacademy.com/AutomationPractice/";
    //await rohitshetty.navigate("https://rahulshettyacademy.com/AutomationPractice/"); // for onetime use
    await rohitshetty.navigate(rohitshettypageurl);
    await rohitshetty.entercountryname('Bharat');
});
test ('Radio Button Example', async ({page})=>{
    const browser = await chromium.launch({headless: false, channel: 'chrome',slowMo:800});
    const newPage = await browser.newPage();
    const rohitshetty = new RohitShetty(newPage);

    const rohitshettypageurl = "https://rahulshettyacademy.com/AutomationPractice/";

    await rohitshetty.navigate(rohitshettypageurl)
    await rohitshetty.Radiochecks();  
});