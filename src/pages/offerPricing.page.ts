import { Page } from '@playwright/test';

export class OfferPricingPage {
  constructor(protected page: Page) {}

  async clickSubscriptionDescriptionInComparisonSection(subscriptionPlan: string) {
    await this.page.locator('#compare-plans-desktop').getByRole('link', { name: subscriptionPlan }).click();
  }

  async clickSubscriptionButtonInComparisonSection(subscriptionPlan: string) {
    await this.page.getByRole('button', { name: `Get ${subscriptionPlan}` }).nth(2).click();
  }

  async clickSubscriptionButtonInMainSection(subscriptionPlan: string) {
    await this.page.locator('#MultipleHighlightedCards_03').getByRole('button', { name: `Get ${subscriptionPlan}` }).click();
  }

  async clickSubscriptionDescriptionInMainSection(subscriptionPlan: string) {
    await this.page.locator('#MultipleHighlightedCards_03').getByRole('link', { name: subscriptionPlan }).click();
  }

  async goto() {
    await this.page.goto('/offer/pricing/');
  }

  /**
   * @param subscriptionLength - subscription length to select (for 1 month - 1m, for 1 year - 1y, for 2 years - 2y)
   */
  async selectSubscriptionLength(subscriptionLength: string) {
    await this.page.locator('#MultipleHighlightedCards_03').getByRole('combobox').selectOption(subscriptionLength);
  }
}
