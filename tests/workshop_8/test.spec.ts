import { test,expect } from '@playwright/test';
import { PageObject } from './page/Page';

test.describe('Sample test', ()=> {
    let pageObject : PageObject

    test.beforeEach(async({ browser })=>{
        const page = await browser.newPage();
        pageObject = new PageObject(page);
        await pageObject.open('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_7/index.html');        
    })

    test.skip('Test 1: Fill all fields', async()=>{
        await pageObject.fillFirstName('Roma');
        await pageObject.fillAge('32');
        await pageObject.checkIsStudent();
        await pageObject.applyData();

        expect(await pageObject.text(pageObject.displayFirstNameSelector)).toBe('Roma');
        expect(await pageObject.text(pageObject.displayAgeSelector)).toBe('32');
        expect(await pageObject.text(pageObject.displayIsStudentSelector)).toBe('Yes');
    })
})