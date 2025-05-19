import { expect, Locator, Page, Browser} from "@playwright/test";
import Actions from "../Utilities/Actions";

export default class RohitShettyPage {
    private readonly page: Page;
    private readonly actions: Actions;


    private readonly Radio1 = "input[value='radio1']"
    private readonly Radio2 = "input[value='radio2']"
    private readonly Radio3 = "input[value='radio3']"

    private readonly selectcountry = "#autocomplete:nth-of-type(1)";

    private readonly selectdropdown = "//select[@id='dropdown-class-example']";

    private readonly hoverelement = "//button[@id='mousehover']"

    private readonly chechkbox1:Locator;
    private readonly chechkbox2:Locator
    private readonly chechkbox3:Locator
    private readonly switchwindow:Locator
    private readonly homelink:Locator
    private readonly showmorebtn:Locator
    
    private readonly courseslink:Locator
    private readonly enteralrtname:Locator
    private readonly alertbtn:Locator
    private readonly alrtOK:Locator
    private readonly alrtconfirmbtn:Locator  




    //we can use public page:Page also
    constructor(pageFromOutside: Page) {
        this.page = pageFromOutside;
        this.actions = new Actions(this.page);
        this.chechkbox1 = this.page.locator('#checkBoxOption1');
        this.chechkbox2 = this.page.locator('#checkBoxOption2');
        this.chechkbox3 = this.page.locator('#checkBoxOption3');
        this.switchwindow = this.page.getByText('Open Window')
        this.homelink = this.page.getByText('Home').first()
        this.showmorebtn= this.page.locator("//button[@aria-label='Show more']")
        
        this.courseslink = this.page.locator("//li[@class='nav-item']//following-sibling::li//a[text()='Courses']")
        this.enteralrtname = this.page.locator("input#name")
        this.alertbtn = this.page.locator("input#alertbtn")
        this.alrtconfirmbtn=this.page.locator("input#confirmbtn")



    }
    




    async navigate(url: string) {
        await this.page.goto(url);
    }
    async navig() {
        await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    }

    async entercountryname(countryname: string) {
        await this.page.locator(this.selectcountry).fill(countryname);
        await this.page.waitForTimeout(2000);
        
        await expect(this.page.getByText('India').first()).toBeVisible();
        await this.page.locator(this.selectcountry).clear() //fill('');
        //await expect(this.page.getByText('India')).toBeNull();
        
    }
    async Radiochecks() {
        await this.page.locator(this.Radio1).check();
        await this.page.locator(this.Radio3).check();

        let middleradio = this.page.locator(this.Radio2);
        if (await middleradio.isChecked() == false) {
            await middleradio.check();
            console.log('Now the middle radio button is selected');
        }
    }
    async dropdown(label: string, text: string, index: number) {
        let dropdown = this.page.locator(this.selectdropdown);
        await this.actions.clickonelement(dropdown);
        await this.actions.selectdropdownbytext(dropdown, text);
        await this.actions.selectdropdownbyvalue(dropdown, label);
        await this.actions.selectdropdownbyindex(dropdown, index);
        console.log('all dropdows are checked');
    }
    async Hover() {
        await this.page.hover(this.hoverelement)
        await expect(this.page.getByText('Reload')).toBeVisible();
    }
    async CheckBox(){
        await this.chechkbox1.click()
        await this.actions.clickonelement(this.chechkbox3)
        let check2 = await this.chechkbox2
        if (await check2.isChecked()==false){
           await check2.check()
        }
        console.log('All options are checked')
    }
    async Switchwindow()
    {
        
        await this.switchwindow.click()
        const [page] = await Promise.all([
    this.page.waitForEvent('popup'),
    await this.switchwindow.click()// Opens product in a new tab
  ]);

  // Step 4: Wait for new tab to load
        await page.waitForLoadState('domcontentloaded');
        await expect(page).toHaveURL("https://www.qaclickacademy.com/")
        const coursesLink = page.locator("//li[@class='nav-item']//following-sibling::li//a[text()='Courses']");
        await coursesLink.click();
        await expect(page.getByText('QA Click Academy')).toBeVisible()
        //await this.actions.clickonelement(this.showmorebtn)
        await this.showmorebtn.click()
        
    }
    async alertbox()
    {
        await this.enteralrtname.fill("Rishi")
        this.page.once('dialog', async (alrt) => {
            let alrttext = await alrt.defaultValue()
            console.log(alrttext)
            await alrt.accept();
        });
        await this.alertbtn.click()
        await this.alrtconfirmbtn.click()
    }



}