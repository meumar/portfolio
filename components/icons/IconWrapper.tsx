/* eslint-disable no-undef */
"use client";

import type { IconType } from "react-icons";
import type { SVGProps } from "react";

type Props = {
  icon: IconType;
  className?: string;
};

export default function IconWrapper({ icon, className }: Props) {
  // Cast to a valid JSX component that accepts SVG props
  const IconComponent = icon as unknown as (
    props: SVGProps<SVGSVGElement>,
  ) => JSX.Element;

  return <IconComponent className={className} />;
}
