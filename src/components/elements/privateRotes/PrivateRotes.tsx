import { Loading } from "components";
import React, { useEffect } from "react";
import { Suspense } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useAppDispatch } from "store/storeHooks";

const PrivateRotes = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  const token = localStorage.getItem("token");
  return token ? (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRotes;
