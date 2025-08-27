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
    href: "",
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
        href: "",
        key: "create-routes",
        label: "Create routes",
        icon: ChevronRight,
      },
      {
        href: "",
        key: "development-react-app",
        label: "Development React App",
        icon: ChevronRight,
      },
      {
        href: "",
        key: "sport-xi-project",
        label: "Sport Xi Project",
        icon: ChevronRight,
      },
      {
        href: "",
        key: "wordpress-theme",
        label: "Wordpress theme",
        icon: ChevronRight,
      },
    ],
  },
  {
    href: "",
    key: "messages",
    label: "Messages",
    icon: MessageCircleMore,
    badge: "3",
  },
  {
    href: "",
    key: "calendar",
    label: "Calendar",
    icon: CalendarRange,
  },
  {
    href: "",
    key: "team-members",
    label: "Team members",
    icon: UserRound,
  },
];
