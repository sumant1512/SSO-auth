/**
 * This file contains authentication parameters. Contents of this file
 * is roughly the same across other MSAL.js libraries. These parameters
 * are used to initialize Angular and MSAL Angular configurations in
 * in app.module.ts file.
 */

import {
  LogLevel,
  Configuration,
  BrowserCacheLocation,
} from "@azure/msal-browser";

const isIE =
  window.navigator.userAgent.indexOf("MSIE ") > -1 ||
  window.navigator.userAgent.indexOf("Trident/") > -1;

export const msalConfig: Configuration = {
  auth: {
    clientId: "38318054-b3c5-45fe-9eca-5cf660751f69",
    authority:
      "https://login.microsoftonline.com/1789eaea-f3b3-4087-bdf6-ebe2a6e60ed8",
    redirectUri: "/login",

    postLogoutRedirectUri: "/login",
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: isIE,
  },
  system: {
    loggerOptions: {
      loggerCallback(logLevel: LogLevel, message: string) {},
      logLevel: LogLevel.Verbose,
      piiLoggingEnabled: false,
    },
  },
};

export const silentRequest = {
  scopes: ["openid", "profile"],
  loginHint: "example@domain.net",
};
