"use client";
import { cn } from "@/utils/utils";
import Hamburger from "hamburger-react";
import React, { Suspense, useState } from "react";
import NavigationLink from "./NavigationLink";
import { useSelectedLayoutSegment } from "next/navigation";
import LocalSwitcher from "./LocalSwitcher";
import { useTranslations } from "next-intl";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const changeMenu = () => {
    setIsOpen(!isOpen);
  };

  const t = useTranslations("Navigation");

  const NavigationLinks = [
    {
      id: 1,
      label: t("home"),
      href: "/",
    },
    {
      id: 2,
      label: t("contact"),
      href: "/contact",
    },
    {
      id: 3,
      label: "FAQ",
      href: "/FAQ",
    },
    {
      id: 4,
      label: "contact",
      href: "/contact",
    },
  ];
  return (
    <div className="w-full absolute bg-red-400  px-2 md:px-5 sm:px-6 pt-7 sm:pt-[44px] sm:pl-[45px] lg:pt-[48px] lg:pl-[140px] lg:pr-[151px] flex items-center flex-col">
      <div className="w-full z-[10] lg:max-w-[1109px]">
        <div className="w-full">
          {/* Mobile Navbar background */}
          {isOpen && (
            <div className="absolute lg:hidden top-0 left-0 pointer-events-none w-[100%] h-[101vh] overflow-hidden z-[10]">
              <div
                className={cn(
                  `absolute top-[45px] left-2 h-[53px] w-[53px] rounded-full  max-w-[375px] bg-cover bg-center bg-black invisible z-[9]
              transition-all duration-800 ease-burger-menu  pointer-events-none`,
                  isOpen && "scale-[80] visible"
                )}
              />
              <div className="w-full h-full absolute planes"></div>
            </div>
          )}

          {/* Mobile Navbar Content */}
          {isOpen && (
            <>
              <div className="absolute z-[11] lg:hidden  overflow-x-scroll top-0 bottom-0 h-[100vh] pt-[22vh] flex flex-col justify-between left-0 right-0 p-[16px] md:px-5 ">
                <div className="flex flex-col gap-[24px] mb-[77px] text-green-300 relative">
                  {NavigationLinks?.map((navigationLink: any) => {
                    return (
                      <NavigationLink
                        key={navigationLink.id}
                        href={navigationLink.href}
                        type="mobile"
                        onClick={() => isOpen && changeMenu()}
                      >
                        <div className="flex items-center">
                          {pathname === navigationLink.href && (
                            <div className="w-[12px] h-[12px] rounded-full bg-white mr-[10px]" />
                          )}{" "}
                          {navigationLink.label}
                        </div>
                      </NavigationLink>
                    );
                  })}
                </div>
                {/* TODO: Authorization */}
                <div className="bottom-0">
                  {/* <NavigationLink
                    key="contact us"
                    type="mobile"
                    href={navigationLinks.href}
                    className="w-full flex justify-center text-white items-center bg-[#ff9300] rounded-[128px] p-4 mb-10"
                    onClick={() => isOpen && changeMenu()}
                  >
                    {navigationLinks.contactName}
                  </NavigationLink> */}
                  <Suspense>
                    <LocalSwitcher type="mobile" isMenuOpen={isOpen} />
                  </Suspense>
                </div>
              </div>
            </>
          )}
          <div className="flex z-[12] w-full lg:justify-between justify-center items-center relative mb-[37px]">
            <NavigationLink
              key="home"
              type="desktop"
              href="/"
              onClick={() => isOpen && changeMenu()}
            >
              {/* <Icons.Logo className="block w-[88px] mt-[2px] lgDesktop:w-[140px] lgDesktop:mt-0" /> */}
            </NavigationLink>
            <div className="flex items-center">
              <div className="hidden lg:flex lgDesktop:min-w-[378px] lg:gap-[56px] lg:justify-between z-[10] lg:mr-[106px]">
                {NavigationLinks?.map((navigationLink: any) => {
                  return (
                    <NavigationLink
                      key={navigationLink.id}
                      href={navigationLink.href}
                      type="desktop"
                    >
                      <div className="flex flex-col items-center">
                        {navigationLink.label}
                        {pathname === navigationLink.href && (
                          <div className="w-1 h-1 mt-[2px] rounded-full bg-white" />
                        )}
                      </div>
                    </NavigationLink>
                  );
                })}
              </div>
              <Suspense>
                <LocalSwitcher type="desktop" isMenuOpen={isOpen} />
              </Suspense>

              {/* <NavigationLink
                key="contact us"
                type="desktop"
                href={navigationLinks.contactLink}
                className="hidden lgDesktop:flex p-4 w mr-[14px] rounded-[128px] duration-500 transition-all text-white justify-center z-[10] w-[180px] bg-white/[1%] border-[1px] border-gradient-to-b from-[#fff]/[30%] to-[#999]/[0%] hover:bg-white hover:text-black"
              >
                {navigationLinks.contactName}
              </NavigationLink> */}
            </div>
            <div
              className="absolute lg:hidden left-0 top-0 w-[40px] h-[40px] rounded-full bg-white/10 flex justify-center items-center"
              onClick={changeMenu}
            >
              <div className="ml-[-27px] mt-[-28px] w-[20px] h-[20px]">
                <Hamburger
                  size={16}
                  rounded
                  color="#fff"
                  toggled={isOpen}
                  toggle={changeMenu}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
