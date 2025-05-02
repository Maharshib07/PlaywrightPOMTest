import { expect, Page } from "@playwright/test";

export default class RohitShetty {
    protected readonly page: Page;

    Radio1 = "input[value='radio1']"
    Radio2 = "input[value='radio2']"
    Radio3 = "input[value='radio3']"
    selectcountry = "#autocomplete:nth-of-type(1)";



    constructor(page: Page) {

        this.page = page;
    }

    async navigate(url: string) {
        await this.page.goto(url);
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





}