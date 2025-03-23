import { test, expect } from "@playwright/test";
import { OffersPage } from "../../src/pages/offers.page";

let offersPage: OffersPage;
const expectedUrl = "https://nordvpn.com/offer/pricing/";

test.beforeEach(async ({ page }) => {
  offersPage = new OffersPage(page);
  await offersPage.goto();
});

test("should navigate to pricing page when 'Get NordVPN' button is clicked", async ({ page }) => {
  await offersPage.getNordVpnButton.click();
  await expect(page).toHaveURL(expectedUrl);
});

test("should navigate to pricing page when 'Get the Deal' button is clicked", async ({ page }) => {
  await offersPage.getTheDealButton.click();
  await expect(page).toHaveURL(expectedUrl);
});

test("should navigate to pricing page when 'Get Extra Savings' button is clicked", async ({ page }) => {
  await offersPage.getExtraSavingsButton.click();
  await expect(page).toHaveURL(expectedUrl);
});

test("should navigate to pricing page when 'Get the Deal' button 2 is clicked", async ({ page }) => {
  await offersPage.getTheDealButton2.click();
  await expect(page).toHaveURL(expectedUrl);
});

test("should navigate to pricing page when 'Get the Deal' button 3 is clicked", async ({ page }) => {
  await offersPage.acceptCookiePolicy();
  await offersPage.getTheDealButton3.click();
  await expect(page).toHaveURL(expectedUrl);
});

test("should navigate to pricing page when 'Try NordVPN Risk Free' button is clicked", async ({ page }) => {
  await offersPage.tryNordVpnRiskFree.click();
  await expect(page).toHaveURL(expectedUrl);
});

test("should navigate to pricing page when 'Get NordVPN' button 2 is clicked", async ({ page }) => {
  await offersPage.getNordVpnButton2.click();
  await expect(page).toHaveURL(expectedUrl);
});

test("should navigate to pricing page when 'Get NordVPN' button on header is clicked", async ({ page }) => {
  await offersPage.scrollDownToWhyChooseNordVpn();
  await offersPage.getNordVpnHeaderButton.click();
  await expect(page).toHaveURL(expectedUrl);
});
