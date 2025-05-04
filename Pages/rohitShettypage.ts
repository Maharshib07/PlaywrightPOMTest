import { expect, Page } from "@playwright/test";
import Actions from "../Utilities/Actions";  

export default class RohitShetty {
    private readonly page: Page;
    private readonly actions:Actions;

    Radio1 = "input[value='radio1']"
    Radio2 = "input[value='radio2']"
    Radio3 = "input[value='radio3']"

    selectcountry = "#autocomplete:nth-of-type(1)";

    selectdropdown ="//select[@id='dropdown-class-example']";

     //we can use public page:Page also
    constructor(page: Page) {
        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
    }
    async  navig(){
        await this.page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    }

    async entercountryname(countryname: string) {
        await this.page.locator(this.selectcountry).fill(countryname);
        await this.page.waitForTimeout(2000);
        await expect(this.page.getByText('Bharat')).toBeVisible;
        await this.page.locator(this.selectcountry).fill('');
        //await expect(this.page.getByText('')).toBeNull();
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
    async dropdown(label:string, text:string,index:number){
        let dropdown =this.page.locator(this.selectdropdown);
        await this.actions.clickonelement(dropdown);
        await this.actions.selectdropdownbytext(dropdown,text);
        await this.actions.selectdropdownbyvalue(dropdown,label);
        await this.actions.selectdropdownbyindex(dropdown,index);
        console.log('all dropdows are checked');
    }





}