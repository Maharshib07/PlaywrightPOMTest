import {Page, Locator} from '@playwright/test';
export default class Actions{

constructor(private page:Page){
    this.page=page;
}

async iselementvisible(locator:Locator):Promise <boolean>{
    return await locator.isVisible();
}

async clickonelement(locator:Locator){
    await locator.click();
}

async doubleclick(locator:Locator){
    await locator.dblclick();
}

async rightclick(locator:Locator){
     await locator.click({button:'right'});
}

async typetext(locator:Locator, text:string){
    await locator.fill(text);
}

async cleartext(locator:Locator){
    await locator.fill('');
}

async Hover(locator:Locator){
    await locator.hover();
}

async scrooltoview(locator:Locator){
    await locator.scrollIntoViewIfNeeded();
}

async presskey(key:string){
    await this.page.keyboard.press(key);
}

async draganddrop(from:Locator,to:Locator){
 await from.dragTo(to);
}



async selectdropdownbyvalue(locator:Locator,value:string){
    await locator.selectOption(value); //value
}

async selectdropdownbytext(locator:Locator,label:string){
    await locator.selectOption(label);  //text
}

async selectdropdownbyindex(locator:Locator,index:number){
    await locator.selectOption({ index });
}

async reload(){
    await this.page.reload();
}

}