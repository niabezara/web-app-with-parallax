"use client";
import { cn } from "@/utils/utils";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

import React, { useState, useTransition } from "react";
import { useClickAway } from "@uidotdev/usehooks";
import { locales } from "@/config";
import { useRouter, usePathname } from "../../navigation";
import { Icons } from "../shared/Icons";

interface LocalSwitcherProps {
  isMenuOpen?: boolean;
  type?: string;
}

const LocaleText: React.FC<{
  locale: string;
  isMenuOpen?: boolean;
  siteLocale?: string;
}> = ({ locale, isMenuOpen, siteLocale }) => {
  return (
    <span
      className={cn(
        "mr-1 font-red-hat-display",
        isMenuOpen ? "text-white/50" : "text-white/50",
        siteLocale && siteLocale === locale ? "text-white" : "text-white/50"
      )}
    >
      {locale === "ka" ? "GE" : "EN"}
    </span>
  );
};

const LocalSwitcher: React.FC<LocalSwitcherProps> = ({ isMenuOpen, type }) => {
  const [isPending, startTransition] = useTransition();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const allParams = searchParams.toString();

  const onLinkClickitem = (item: "ka" | "en") => {
    let newPathname: any = pathname + "?" + allParams;

    startTransition(() => {
      router.replace(newPathname, { locale: item });
      setIsDropdownOpen(false);
    });
  };
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const ref = useClickAway(() => {
    setIsDropdownOpen(false);
  });

  return (
    <>
      {type === "desktop" && (
        <div
          className={cn(
            "md:flex md:items-center mr-[14px] md:visible z-[20]",
            isMenuOpen ? "visible " : "invisible "
          )}
          ref={ref as React.RefObject<HTMLDivElement>}
        >
          <div className="relative hidden lg:block">
            <button
              onClick={toggleDropdown}
              disabled={isPending}
              className={cn(
                "flex items-center justify-center",
                isPending && "transition-opacity [&:disabled]:opacity-30"
              )}
            >
              <LocaleText locale={locale} isMenuOpen={isMenuOpen} />

              <Icons.arrowDownIcon
                className={cn(
                  ` transform transition-transform duration-300`,
                  isDropdownOpen && "rotate-180"
                )}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full rounded-[4px] w-[50px] h-fit shadow-md z-50">
                <div>
                  {locales.map((item) => (
                    <button
                      key={item}
                      onClick={() => onLinkClickitem(item)}
                      className="flex items-center justify-start w-full h-[33px]  pl-[5px]  cursor-pointer md:hover:bg-black/10"
                    >
                      <LocaleText
                        locale={item}
                        siteLocale={locale}
                        isMenuOpen={isMenuOpen}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {isMenuOpen && type === "mobile" && (
        <div className="w-full flex gap-[15px]">
          <button
            onClick={() => onLinkClickitem("en")}
            className={cn(
              "w-full flex justify-center p-4 rounded-[128px] font-semibold font-red-hat-display",
              locale === "en"
                ? "bg-white text-black"
                : "bg-black text-white border-[1px] border-gradient-to-b from-[#fff]/[30%] to-[#fff]/[0%]"
            )}
          >
            ENG
          </button>
          <button
            onClick={() => onLinkClickitem("ka")}
            className={cn(
              "w-full flex justify-center p-4 rounded-[128px] font-semibold font-red-hat-display",
              locale === "ka"
                ? "bg-white text-black"
                : "bg-black text-white border-[1px] border-gradient-to-b from-[#fff]/[30%] to-[#fff]/[0%]"
            )}
          >
            GEO
          </button>
        </div>
      )}
    </>
  );
};

export default LocalSwitcher;
