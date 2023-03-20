import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "store";
import { QueryClientProvider } from "react-query";
import { queryClient } from "services/client/query.config";

const root = ReactDOM.createRoot(
     document.getElementById("root") as HTMLElement
);

root.render(
     // <React.StrictMode>
     <Provider store={store}>
          <QueryClientProvider client={queryClient}>
               <BrowserRouter>
                    <App />
               </BrowserRouter>
          </QueryClientProvider>
     </Provider>
     // </React.StrictMode>
);
