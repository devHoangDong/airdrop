import { Menu } from "@/types/menu";
import { IoFlashOutline, IoFlameOutline, IoStar, IoBriefcaseOutline, IoMail } from "react-icons/io5";


const menuData: Menu[] = [
  {
    id: 1,
    title: "Latest airdrops",
    path: "/",
    newTab: false,
    icon: <IoFlashOutline />,
  },
  {
    id: 2,
    title: "Hot airdrops",
    path: "/about",
    newTab: false,
    icon: <IoFlameOutline />,
  },
  {
    id: 3,
    title: "Potiental airdrops",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Solana Airdrops",
        path: "/about",
        newTab: false,
      },
    ],
    icon: <IoStar />,
  },
  {
    id: 4,
    title: "Holder airdrops",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "BTC Holder Airdrops",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Atom holder airdrops",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Eth holder airdrops",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Forks",
        path: "/blog-sidebar",
        newTab: false,
      },
    ],
    icon: <IoBriefcaseOutline />,
  },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    newTab: false,
    icon: <IoMail />,
  },
];
export default menuData;
