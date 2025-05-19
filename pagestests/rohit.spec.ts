import { test, expect, Locator } from "@playwright/test";
import { webkit, chromium, firefox } from 'playwright';

import RohitShettyPage from "../Pages/RohitShettypage";


//import Actions from "../Utilities/Actions";
  
//    const browser = await chromium.launch({headless: false, channel: 'chrome',slowMo:900});
//     const newPage = await browser.newPage();
//    const rohitshetty = new RohitShetty(newPage);

    //const rohitshettypageurl = "https://rahulshettyacademy.com/AutomationPractice/";
test('Suggession Class Example', async ({ page }) => {

    const browser = await chromium.launch({headless: false, channel: 'chrome',slowMo:800});
    const newPage = await browser.newPage();
    const rsPage = new RohitShettyPage(newPage);

    const rohitshettypageurl = "https://rahulshettyacademy.com/AutomationPractice/";
    //await rohitshetty.navigate("https://rahulshettyacademy.com/AutomationPractice/"); // for onetime use
    await rsPage.navigate(rohitshettypageurl);
    await rsPage.entercountryname('India');
});
test ('Radio Button Example', async ({page})=>{
    const browser = await chromium.launch({headless: false, channel: 'chrome',slowMo:800});
    const newPage = await browser.newPage();
    const rohitshetty = new RohitShettyPage(newPage);

    const rohitshettypageurl = "https://rahulshettyacademy.com/AutomationPractice/";

    await rohitshetty.navigate(rohitshettypageurl);
    await rohitshetty.Radiochecks();
    
});
test('Dropdown Example', async ({ page }) => {
   
    const browser = await chromium.launch({headless: false, channel: 'chrome',slowMo:800});
    const newPage = await browser.newPage();
    const rohitshetty = new RohitShettyPage(newPage);

    await rohitshetty.navig();
    await rohitshetty.dropdown('Option2','Option1',3);

});
test ('Mouse Hover Example',async({page})=>{
   
    const rohitshetty = new RohitShettyPage(page);
    await rohitshetty.navig()
    await rohitshetty.Hover()
    
})
test ('Checkbox example',async({page})=>{
    let rohitshetty = new RohitShettyPage(page);
    await rohitshetty.navig()
    await rohitshetty.CheckBox()

})
test ('Switch Window Example',async({page})=>{
    const browser = await chromium.launch({headless: false, channel: 'chrome',slowMo:800});
    
    let rspage = new RohitShettyPage(page)
    await rspage.navig()
    await rspage.Switchwindow()

})
test ("Alert handling", async({page})=>{
    const browser = await chromium.launch({slowMo:800, headless: false})
    let newpage = await browser.newPage()
    const rspage = new RohitShettyPage(newpage)

    await rspage.navig()
    await rspage.alertbox()
})