import { Page, expect } from '@playwright/test';

export class LoginPage {
  emailInput = this.page.getByTestId('identifier-input');
  submitButton = this.page.getByTestId('identifier-submit');
  errorMessage = this.page.getByRole('alert');

  constructor(private page: Page) {}
}
