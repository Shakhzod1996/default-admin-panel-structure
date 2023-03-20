import React from "react";
import PrivateRotes from "components/elements/privateRotes/PrivateRotes";
import { useDarkMode } from "hooks/useDarkMode/useDarkMode";
import Layout from "layout/Layout";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import privateRoutes from "routes/PrivateRoutes";
import publicRoutes from "routes/PublicRoutes";
import { darkMode, GlobalStyle, lightMode } from "styles/global.style";
import "./styles/common.css";
import "./styles/config.css";

// import { ThemeProvider } from "style-components";

const App: React.FC = () => {
     // ? Theme dark light
     const [theme, toggleTheme] = useDarkMode(); // ToggleTheme function which change theme depended on telegram theme
     const themeMode = theme === "light" ? lightMode : darkMode;

     if (!["light", "dark"].includes(localStorage.getItem("theme") || "")) {
          localStorage.setItem("theme", "dark");
     }
     return (
          <>
               <ToastContainer />
               <GlobalStyle />
               <Routes>
                    {publicRoutes.map((route) => (
                         <Route
                              element={route.element}
                              path={route.path}
                              key={route.path}
                         />
                    ))}
                    <Route path="/" element={<Layout />}>
                         <Route path="/" element={<PrivateRotes />}>
                              {privateRoutes.map((route) => (
                                   <Route
                                        element={route.element}
                                        path={route.path}
                                        key={route.path}
                                   />
                              ))}
                         </Route>
                    </Route>
               </Routes>
          </>
     );
};

export default App;
