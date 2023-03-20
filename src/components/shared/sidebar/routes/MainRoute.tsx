import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import { ISidebarRoute } from "../sidebar.types";

export const MainRoute: ISidebarRoute[] = [
  {
    icon: <HomeIcon />,
    title: "Dashboard",
    path: "/dashboard",
  },

  {
    icon: <GroupIcon />,
    title: "Hodimlar",
    path: "/employees",
  },
];
