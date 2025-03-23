import { APIRequestContext } from "@playwright/test";

/**
 * Returns clients localization data over the REST protocol
 */
export const getIpsInsight = (request: APIRequestContext) => {
  return request.get(`${process.env.API_URL}/helpers/ips/insights`);
};
