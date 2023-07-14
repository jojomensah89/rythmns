"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import { Song } from "@/types/stripe";
import usePlayer from "@/hooks/usePlayer";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  userSongs: Song[];
};

const Sidebar = ({ children, userSongs }: Props) => {
  const pathname = usePathname();
  const player = usePlayer();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <>
      <div
        className={twMerge(
          `flex h-full`,
          player.activeId && "h-[calc(100%-80px)]"
        )}
      >
        <aside className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2 ">
          <Box className="">
            <div className="flex flex-col px-5 py-4 gap-y-4">
              {routes.map((route) => (
                <SidebarItem key={route.label} route={route} />
              ))}
            </div>
          </Box>
          <Box className="h-full overflow-y-auto">
            <Library userSongs={userSongs} />
          </Box>
        </aside>
        <main className="flex-1 h-full py-2 overflow-y-auto">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
