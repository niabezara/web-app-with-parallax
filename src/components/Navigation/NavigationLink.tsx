"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import { ComponentProps } from "react";
import type { AppPathnames } from "@/config";

import { cn } from "@/utils/utils";
import Link from "next/link";

export default function NavigationLink<Pathname extends AppPathnames>({
  href,
  onClick,
  type,
  ...rest
}: ComponentProps<typeof Link>) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : "/";
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        type === "mobile" &&
          "text-[48px] font-regular font-red-hat-display text-white/60 xl:font-bold leading-[100%] capitalize relative max-w-fit transtiion-all duration-300 ease-in-out",
        type === "desktop" &&
          "font-regular text-[14px] xl:text-[16px] text-white/60 capitalize duration-300 ease-in-out",
        isActive && `text-red-500`
      )}
      href={href}
      onClick={onClick}
      {...rest}
    />
  );
}
