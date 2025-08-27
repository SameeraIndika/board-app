"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { ChevronRight, LucideIcon } from "lucide-react";

interface SubMenuItem {
  label: string;
  href: string;
  key: string;
  icon: LucideIcon;
}

interface SidebarMenuItemProps {
  item: {
    label: string;
    href: string;
    icon: LucideIcon;
  };
  active: boolean;
  onClick: (url: string) => void;
  hasSubMenu?: boolean;
  subMenuItems?: SubMenuItem[];
  activeSubLink?: string;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({
  item,
  active,
  onClick,
  hasSubMenu = false,
  subMenuItems = [],
  activeSubLink = "",
}) => {
  const routerNavLink = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  
  const isParentActive =
    active ||
    (hasSubMenu &&
      subMenuItems.some((subItem) => subItem.href === activeSubLink));

  const navClass = isParentActive
    ? "bg-tc_primary hover:opacity-95 text-tc_white"
    : "text-tc_secondary hover:bg-tc_primary/10";
  const navIconClass = isParentActive ? "text-tc_white" : "text-tc_primary";

  // Handle menu item click
  const handleNavClick = (url: string) => {
    if (url) {
      onClick(url);
      routerNavLink.push(url);
    }
  };

  // Handle sub-menu item expand/collapse
  const toggleSubMenu = () => {
    if (hasSubMenu) {
      setIsExpanded(!isExpanded);
    } else if (item.href) {
      handleNavClick(item.href);
    }
  };

  // Expand the menu if any sub-link is active
  useEffect(() => {
    if (
      hasSubMenu &&
      subMenuItems.some((subItem) => subItem.href === activeSubLink)
    ) {
      setIsExpanded(true);
    }
  }, [activeSubLink, hasSubMenu, subMenuItems]);

  return (
    <>
      {/* Main menu item */}
      <button
        className={`group relative flex items-center w-full h-10 py-2 px-4 gap-x-2 rounded-md transition-all duration-200 ease-linear font-medium text-15 capitalize whitespace-nowrap ${navClass}`}
        onClick={(e) => {
          e.preventDefault();
          toggleSubMenu();
        }}
      >
        <item.icon size={22} className={navIconClass} />
        <span>{item.label}</span>
      </button>

      {/* Sub-menu items */}
      {hasSubMenu && isExpanded && (
        <div className="flex flex-col w-full ml-4">
          {subMenuItems.map((subItem, index) => (
            <button
              key={index}
              className={`group relative flex items-center w-full h-10 py-2 px-4 gap-x-2 rounded-md transition-all duration-200 ease-linear text-15 capitalize whitespace-nowrap ${
                activeSubLink === subItem.href
                  ? "font-semibold text-tc_primary bg-tc_primary/10"
                  : "font-medium text-tc_text_secondary hover:bg-tc_primary/5"
              }`}
              onClick={() => handleNavClick(subItem.href)}
            >
              <ChevronRight width={12} height={12} />
              {subItem.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarMenuItem;
