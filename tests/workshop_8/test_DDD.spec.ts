import { test, expect } from '@playwright/test';
import { PageObject } from './page/Page';
import testData from './page/testData.json';

test.describe('DDD test', ()=>{
    let pageObject: PageObject;

    test.beforeEach(async({page})=>{
        pageObject = new PageObject(page);
        pageObject.open('file:///Users/roman/Playwrigth_Vasyl_Shpak/src/workshop_7/index.html');
    })

    for (const data of Object.values(testData)){
        test.only(data.testName, async()=>{
            await pageObject.fillFirstName(data.firstName);
            await pageObject.fillAge(data.age);
            if(data.isStudent === true){
                await pageObject.checkIsStudent();
            }
            await pageObject.applyData();

            expect(await pageObject.text(pageObject.displayFirstNameSelector)).toBe(data.expectedFirstName);
            expect(await pageObject.text(pageObject.displayAgeSelector)).toBe(data.expectedAge);
            expect(await pageObject.text(pageObject.displayIsStudentSelector)).toBe(data.expectedIsStudent);
        })
    };
})