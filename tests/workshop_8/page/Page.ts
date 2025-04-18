import { Page } from '@playwright/test';
import { AbstractPage } from './AbstractPage.ts';
import { Input } from './Input.ts';
import { Button } from './Button.ts';

export class PageObject extends AbstractPage{
    private button: Button;
    private input: Input;

    readonly firstNameInputSelector = '#firstName';
    readonly ageInputSelector = '#age';
    readonly isStudentSelector = '#isStudent';
    readonly applyButtonSelector = '#applyData';

    readonly displayFirstNameSelector = '#displayFirstName';
    readonly displayAgeSelector = '#displayAge';
    readonly displayIsStudentSelector = '#displayIsStudent';

    constructor(page: Page){
        super(page);
        this.button = new Button(page);
        this.input = new Input(page);
    };

    async open(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async applyData(): Promise <void>{
        await this.button.clickButton(this.applyButtonSelector) 
    }

    async fillFirstName(value: string): Promise <void>{
        await this.input.setInputValue(this.firstNameInputSelector, value); 
    }
    
    async fillAge(value: string): Promise <void>{
        await this.input.setInputValue(this.ageInputSelector, value); 
    }
    
    async checkIsStudent(): Promise <void>{
        await this.page.check(this.isStudentSelector); 
    }

    async text(selector: string): Promise<string | null>{
        const textContent = await this.page.textContent(selector);
        return textContent ?? null;
    }
};