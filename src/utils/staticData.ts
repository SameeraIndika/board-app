import {
  ChevronRight,
  LayoutGrid,
  Folder,
  MessageCircleMore,
  CalendarRange,
  UserRound,
} from "lucide-react";

export const SIDEBAR_MENU_ITEMS = [
  {
    href: "/",
    key: "dashboard",
    label: "Dashboard",
    icon: LayoutGrid,
  },
  {
    href: "",
    key: "boards",
    label: "Boards",
    icon: Folder,
    hasSubMenu: true,
    subMenuItems: [
      {
        href: "/boards/create-routes",
        key: "create-routes",
        label: "Create routes",
        icon: ChevronRight,
      },
      {
        href: "/boards/development-react-app",
        key: "development-react-app",
        label: "Development React App",
        icon: ChevronRight,
      },
      {
        href: "/boards/sport-xi-project",
        key: "sport-xi-project",
        label: "Sport Xi Project",
        icon: ChevronRight,
      },
      {
        href: "/boards/wordpress-theme",
        key: "wordpress-theme",
        label: "Wordpress theme",
        icon: ChevronRight,
      },
    ],
  },
  {
    href: "/messages",
    key: "messages",
    label: "Messages",
    icon: MessageCircleMore,
    badge: "3",
  },
  {
    href: "/calendar",
    key: "calendar",
    label: "Calendar",
    icon: CalendarRange,
  },
  {
    href: "/team-members",
    key: "team-members",
    label: "Team members",
    icon: UserRound,
  },
];
