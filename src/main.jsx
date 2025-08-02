import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n";
import "./assets/scss/streamit.scss";
// import "./assets/scss/dark.scss";
import "./assets/scss/rtl.scss";
import "./assets/scss/pro.scss";
import "./assets/scss/custom.scss";
import "./assets/scss/customizer.scss";
import "./assets/scss/dashboard-custom.scss";
import "swiper/css";
import "swiper/css/navigation";

//router
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// store
import { store } from "./store/index";
import { Provider } from "react-redux";

// index router
import { IndexRouters } from "./router/index";

const router = createBrowserRouter([...IndexRouters], {
  basename: import.meta.env.BASE_URL,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </Provider>
);
