import { MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ListItemIcon, ListItemText } from "@mui/material";
import { Birzum, Logo } from "assets/svgs";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { openSideBarFunc } from "store/reducers/SidebarSlice/SidebarSlice";
import { useAppDispatch, useAppSelector } from "store/storeHooks";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "styles/global.style";
import { MainRoute } from "./routes/MainRoute";
import { SidebarContainer } from "./Sidebar.style";
import FormatIndentDecreaseIcon from "@mui/icons-material/FormatIndentDecrease";

const useStyles = makeStyles((theme) => ({
     root: {
          width: "100%",
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper,
     },
     nested: {
          paddingLeft: theme.spacing(4),
     },
}));

const Sidebar = () => {
     const { value } = useAppSelector((state) => state.sideBarData);
     const dispatch = useAppDispatch();
     const navigate = useNavigate();
     const pathname = useLocation().pathname;
     // ? Hooks
     const [expanded, setExpanded] = useState<string | false>("panel1");

     //  ? Animation hide
     const showAnimation = {
          hidden: {
               width: 0,
               opacity: 0,
               transition: {
                    duration: 0.5,
               },
          },
          show: {
               width: "auto",
               opacity: 1,
               transition: {
                    duration: 0.2,
               },
          },
     };

     const handleChange =
          (panel: string) =>
          (event: React.SyntheticEvent, newExpanded: boolean) => {
               setExpanded(newExpanded ? panel : false);
          };
     return (
          <SidebarContainer value={value}>
               <motion.div
                    animate={{ width: value ? SIDEBAR_OPEN : SIDEBAR_CLOSE }}
                    className="sidebar-content"
               >
                    <div className="sidebar-top">
                         <div className="sidebar-top-item">
                              <Logo />
                         </div>
                         {value && (
                              <motion.div
                                   className="sidebar-top-item"
                                   variants={showAnimation}
                                   initial="hidden"
                                   animate="show"
                                   exit="hidden"
                              >
                                   <Birzum />
                              </motion.div>
                         )}
                    </div>

                    <div className="sidebar-main">
                         <div className="asosiy">
                              {value && (
                                   <motion.h3
                                        variants={showAnimation}
                                        initial="hidden"
                                        animate="show"
                                        exit="hidden"
                                   >
                                        Asosiy
                                   </motion.h3>
                              )}
                              {MainRoute.map((item, key) => {
                                   return (
                                        <div
                                             className={`sidebar-item ${
                                                  pathname.includes(
                                                       item.path || ""
                                                  )
                                                       ? "sideBar-active"
                                                       : ""
                                             }`}
                                             onClick={() =>
                                                  item?.path &&
                                                  navigate(item?.path)
                                             }
                                        >
                                             <ListItemIcon>
                                                  {item.icon}
                                             </ListItemIcon>
                                             <ListItemText
                                                  primary={item.title}
                                             />
                                        </div>
                                   );
                              })}
                         </div>

                         <div className="sidebar-bottom">
                              <MenuItem
                              // @ts-ignore
                                   sx={{
                                        padding: "15px 7px",
                                        border: "1px solid #e3e3e3",
                                        borderRadius: "4px",
                                   }}
                                   onClick={() => dispatch(openSideBarFunc())}
                              >
                                   <FormatIndentDecreaseIcon />
                              </MenuItem>
                         </div>
                    </div>
               </motion.div>
          </SidebarContainer>
     );
};

export default Sidebar;
