import NotificationsIcon from "@mui/icons-material/Notifications";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import {
     FormControl, MenuItem,
     Select,
     SelectChangeEvent
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAppSelector } from "store/storeHooks";
import { SIDEBAR_CLOSE, SIDEBAR_OPEN } from "styles/global.style";
import { NavbarContainer } from "./Navbar.style";
// @ts-ignore

import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const { value } = useAppSelector((state) => state.sideBarData);

  const [lang, setLang] = useState("EN");
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    window.addEventListener("fullscreenchange", changeFullScreen);
    return () =>
      window.removeEventListener("fullscreenchange", changeFullScreen);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value);
  };

  const changeFullScreen = () => {};

  // ? FullScreen
  const fullScreenFunc = () => {
    const body = document.body;
    if (isFull) {
      setIsFull(false);
      document.exitFullscreen();
    } else {
      setIsFull(true);
      body.requestFullscreen();
    }
  };

  const location = useLocation();

  return (
    <NavbarContainer>
      <motion.div
        animate={{ left: value ? SIDEBAR_OPEN : SIDEBAR_CLOSE }}
        className="navbar-content"
      >
        <h1 className="title">
          {location.pathname.split("/").length > 1
            ? location.pathname.split("/")[1]
            : "Dashboard"}
        </h1>

        <div className="navbar-right-container">
          <MenuItem>
            <NotificationsIcon />
          </MenuItem>

          <MenuItem onClick={fullScreenFunc}>
            {isFull ? <CloseFullscreenIcon /> : <OpenInFullIcon />}
          </MenuItem>

          <FormControl sx={{ m: 1, minWidth: 80 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              // value={age}
              onChange={handleChange}
              autoWidth
              label="Age"
              defaultValue="EN"
            >
              <MenuItem value={"EN"}>EN</MenuItem>
              <MenuItem value={"RU"}>RU</MenuItem>
              <MenuItem value={"UZ"}>UZ</MenuItem>
            </Select>
          </FormControl>
        </div>
      </motion.div>
    </NavbarContainer>
  );
};

export default Navbar;
