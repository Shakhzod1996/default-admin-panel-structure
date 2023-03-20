import { RouteObject } from "react-router-dom";
import { lazy } from "react";
const Dashboard = lazy(() => import("pages/dashboard"));

const privateRoutes: RouteObject[] = [
  {
    element: <Dashboard />,
    path: "dashboard",
  },
  
  {
    element: "not found",
    path: "*",
  },
];

export default privateRoutes;
