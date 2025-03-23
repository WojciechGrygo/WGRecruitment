import { Page, expect } from "@playwright/test";

export class OffersPage {
  // Locators
  getNordVpnButton = this.page.locator("#Hero_01").getByRole("button", { name: "Get NordVPN" });
  getTheDealButton = this.page.locator('[data-ga-slug="Get the Deal"]').first();
  getExtraSavingsButton = this.page.getByRole("button", { name: "Get Extra Savings" });
  getTheDealButton2 = this.page.locator('[data-ga-slug="Get the Deal"]').nth(1);
  getTheDealButton3 = this.page.locator('[data-ga-slug="Get the Deal"]').nth(2);
  getNordVpnButton2 = this.page.locator('[data-ga-slug="Get the Deal"]').nth(4);
  getNordVpnHeaderButton = this.page.locator('[data-ga-slug="Get NordVPN"]').first();
  tryNordVpnRiskFree = this.page.getByRole("button", { name: "Try NordVPN Risk Free" });

  constructor(private page: Page) {}

  async acceptCookiePolicy() {
    await this.page.getByTestId("consent-widget-accept-all").click();
    await expect(this.page.getByTestId("consent-widget-accept-all")).toBeHidden();
  }

  async goto() {
    await this.page.goto("/offer");
  }

  async scrollDownToWhyChooseNordVpn() {
    await this.page.locator('[data-section="ComparisonTableRounded"]').scrollIntoViewIfNeeded();
  }
}
