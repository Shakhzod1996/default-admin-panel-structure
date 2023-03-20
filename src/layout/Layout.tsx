import { useAppSelector } from "store/storeHooks";
import { RootState } from "store";
import { Navbar, Sidebar } from "components";
import { motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import {
     PrivateContainer,
     SIDEBAR_CLOSE,
     SIDEBAR_OPEN,
} from "styles/global.style";

const Layout = () => {
     const { value } = useAppSelector((state: RootState) => state.sideBarData);
     return (
          <>
               <Navbar />
               <Sidebar />

               <motion.div
                    animate={{
                         width: "100%",
                         paddingLeft: value ? SIDEBAR_OPEN : SIDEBAR_CLOSE,
                    }}
                    className="home-container"
               >
                    <PrivateContainer>
                         <Outlet />
                    </PrivateContainer>
               </motion.div>
          </>
     );
};

export default Layout;
