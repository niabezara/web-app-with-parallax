import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const shellVariants = cva("", {
  variants: {
    variant: {
      default: "container",
      maxWrapper:
        "flex flex-col flex-1 max-w-[1328px] lg:mx-auto w-full bg-red-500",
      sidebar: "",
      centered: "container flex h-dvh max-w-2xl flex-col justify-center ",
      notFound:
        "py-8 md:py-10 max-w-[1328px] mx-auto w-full flex flex-1 flex-col items-center",
      markdown: "container max-w-3xl py-8 md:py-10",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ShellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof shellVariants> {
  as?: React.ElementType;
}

function Shell({
  className,
  as: Comp = "section",
  variant,
  ...props
}: ShellProps) {
  return (
    <Comp className={cn(shellVariants({ variant }), className)} {...props} />
  );
}

export { Shell, shellVariants };
