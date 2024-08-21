import { NextIntlClientProvider } from "next-intl";
import { Rowdies } from "next/font/google";
import { locales } from "@/config";
import { ReactNode, Suspense } from "react";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import Navigation from "@/components/Navigation/Navigation";
import { cn } from "@/utils/utils";
import { Providers } from "../providers";
import Loading from "./loading";
import dynamic from "next/dynamic";

const redHatDisplay = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          redHatDisplay.className,
          "relative antialiased flex flex-col overflow-x-hidden !h-auto"
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <Navigation />
          <Suspense fallback={<Loading />}>
            <Providers>{children}</Providers>
          </Suspense>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
