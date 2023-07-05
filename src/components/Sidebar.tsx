"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: Props) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        label: "Home",
        active: pathname !== "/search",
      },
    ],
    []
  );
  return <div>{children}</div>;
};

export default Sidebar;
