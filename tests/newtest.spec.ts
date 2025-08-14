import { test, expect, type Page } from '@playwright/test';
import { HomePage } from '../pages/home-page'; 
//AAA

const URL = 'https://playwright.dev/';
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
    homePage = new HomePage(page);
});

async function clickGetStarted(page:Page) {
    //await page.getByRole('link', {name: 'Get started'}).click();
    await homePage.clickGetStarted();
}

test.describe('Playwright website', () => {

    test('has title', async () => {
        await homePage.assertPageTitle();
    });

    test('get started link', async ({page}) => {
        await clickGetStarted(page);
        await expect(page).toHaveURL(/.*intro/);
    });

});




