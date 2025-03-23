import test, { expect } from '@playwright/test';
import { LoginPage } from '../../src/pages/login.page';

let newPage;
let loginPage: LoginPage;

test.beforeEach(async ({ context, page }) => {
  const pagePromise = context.waitForEvent('page'); // Wait for a new page to be opened
  await page.goto('/'); // Navigate to the home page
  await page.getByRole('link', { name: 'Log In' }).click(); // Click on the 'Log In' link
  newPage = await pagePromise; // Assign the newly opened page to newPage
  await newPage.waitForLoadState(); // Wait for the new page to fully load
  loginPage = new LoginPage(newPage); // Initialize the LoginPage object with the new page
});

test('Login with incorrect email address', async () => {
  await loginPage.emailInput.fill('incorrect@emailAddress');
  await loginPage.submitButton.click();
  await expect(loginPage.errorMessage).toContainText('Please enter a valid email address.');
});

test('Login with empty email address', async () => {
  await loginPage.submitButton.click();
  await expect(loginPage.errorMessage).toContainText('Email can’t be blank');
});

// To test login with correct email address and password one should solve the captcha
// I would probably use playwright-extra + @extra/recaptcha to solve the captcha - the token is needed to be passed
