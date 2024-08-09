import { ReactNode } from "react";
import "./globals.css";
import { locales } from "@/config";
// import { GoogleAnalytics } from "@next/third-parties/google";

type Props = {
  children: ReactNode;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <>
      {children}
      {/* <GoogleAnalytics gaId="G-5FP10X5ZEY" /> */}
    </>
  );
}
