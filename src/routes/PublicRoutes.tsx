import Login from "pages/login";
import { RouteObject } from "react-router-dom";

const publicRoutes: RouteObject[] = [
  {
    element: <Login />,
    path: "/login",
  },
  // {
  //      element: <NotFound />,
  //      path: "*",
  // },
];

export default publicRoutes;
