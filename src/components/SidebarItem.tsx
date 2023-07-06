import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

type Props = {
  route: {
    icon: IconType;
    label: string;
    active: boolean;
    href: string;
  };
};

const SidebarItem = ({ route }: Props) => {
  const { icon: Icon, label, active, href } = route;
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400`,
        active && "text-white"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full">{label}</p>
    </Link>
  );
};

export default SidebarItem;
