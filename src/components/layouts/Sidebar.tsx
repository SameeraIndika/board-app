"use client";

import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import { LogOut } from "lucide-react";

import SidebarMenuItem from "../common/SidebarMenuItem";
import { DefaultButton } from "../buttons/DefaultButton";

import { SIDEBAR_MENU_ITEMS } from "../../utils/staticData";

const Sidebar = () => {
  const pathname = usePathname();
  const routerNavLink = useRouter();

  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("/dashboard");

  // Go to each page
  const handleNavClick = (url: string) => {
    setActive(url);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    routerNavLink.push(url);
  };

  // Update active state when pathname changes
  useEffect(() => {
    if (pathname === "/" || pathname === "/") {
      setActive("/");
    } else {
      setActive(pathname);
    }
  }, [pathname]);

  return (
    <div className="flex flex-col justify-between w-full h-full min-h-[calc(100vh-80px)] px-4 py-2 bg-tc_white overflow-y-auto">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full py-2">
          <ul className="flex flex-col gap-y-4">
            {SIDEBAR_MENU_ITEMS.map((item) => (
              <SidebarMenuItem
                key={item.key}
                item={item}
                active={active === item.href}
                onClick={handleNavClick}
                hasSubMenu={item.hasSubMenu}
                subMenuItems={item.subMenuItems}
                activeSubLink={active}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center w-full">
        <DefaultButton
          buttonWidthClass="w-full"
          icon={LogOut}
          label="Logout"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Sidebar;
