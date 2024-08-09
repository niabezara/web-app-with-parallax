import { Pathnames } from "next-intl/routing";

export const defaultLocale = "ka" as const;
export const locales = ["ka", "en"] as const;

export const pathnames = {
  "/": "/",
  //   "/contact": "/contact",
  //   "/ads-guide": "/ads-guide",
  //   "/blog": "/blog",
  //   "/projects": "/projects",
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

export const port = process.env.PORT || 3000;
export const host = process.env.PRODUCTION
  ? `https://${process.env.PRODUCTION_URL}`
  : `http://localhost:${port}`;
