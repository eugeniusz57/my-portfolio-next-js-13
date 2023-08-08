interface NavItem {
  id: number;
  label: string;
  page: string;
}

export const navItems: Array<NavItem> = [
  {
    id: 1,
    label: "Home",
    page: "home",
  },
  {
    id: 2,
    label: "About",
    page: "about",
  },
  {
    id: 3,
    label: "Projects",
    page: "projects",
  },
];