import { test, expect } from "@playwright/test";
import { getIpsInsight } from "../../src/requests/nordVpnApi";

test.describe("GET /helpers/ips/insights", () => {
  test("should return 200 status code", async ({ request }) => {
    const response = await getIpsInsight(request);
    expect(response.status()).toBe(200);
  });

  // Currently it does not work because server is not responding
  test.skip("should contain valid response data for IP from United States", async ({ browser, request }) => {
    const context = await browser.newContext({
      proxy: {
        server: "http://50.207.199.87:80",
      },
      ignoreHTTPSErrors: true,
    });
    const page = await context.newPage();
    const response = await getIpsInsight(page.request);
    expect(response.status()).toBe(200);
    // Assertions
    // (...)
    await context.close();
  });

  test("should return JSON content type", async ({ request }) => {
    const response = await getIpsInsight(request);
    expect(response.headers()["content-type"]).toContain("application/json");
  });

  test("should return valid localization data structure", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(data).toHaveProperty("ip");
    expect(data).toHaveProperty("country");
    expect(data).toHaveProperty("country_code");
    expect(data).toHaveProperty("city");
    expect(data).toHaveProperty("isp");
    expect(data).toHaveProperty("isp_asn");
    expect(data).toHaveProperty("protected");
    expect(data).toHaveProperty("longitude");
    expect(data).toHaveProperty("latitude");
    expect(data).toHaveProperty("state_code");
    expect(data).toHaveProperty("zip_code");
  });

  test("should return ip as a string", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.ip).toBe("string");
  });

  test("should return country as a string", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.country).toBe("string");
  });

  test("should return country_code as a string", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.country_code).toBe("string");
  });

  test("should return city as a string", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.city).toBe("string");
  });

  test("should return isp as a string", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.isp).toBe("string");
  });

  test("should return isp_asn as a number", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.isp_asn).toBe("number");
  });

  test("should return protected as a boolean", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.protected).toBe("boolean");
  });

  test("should return longitude as a number", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.longitude).toBe("number");
  });

  test("should return longitude within valid range", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(data.longitude).toBeGreaterThanOrEqual(-180);
    expect(data.longitude).toBeLessThanOrEqual(180);
  });

  test("should return latitude within valid range", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(data.latitude).toBeGreaterThanOrEqual(-90);
    expect(data.latitude).toBeLessThanOrEqual(90);
  });

  test("should return latitude as a number", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.latitude).toBe("number");
  });

  test("should return state_code as a string", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.state_code).toBe("string");
  });

  test("should return zip_code as a string", async ({ request }) => {
    const response = await getIpsInsight(request);
    const data = await response.json();
    expect(typeof data.zip_code).toBe("string");
  });
});
