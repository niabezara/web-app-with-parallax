import { SVGProps, SVGAttributes } from "react";

type IconProps = SVGProps<SVGSVGElement> & SVGAttributes<SVGSVGElement>;

export const Icons = {
  arrowDownIcon(props: IconProps) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 16L6 10H18L12 16Z" fill="white" />
      </svg>
    );
  },
};
