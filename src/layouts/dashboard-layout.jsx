import React, { memo, Fragment, Suspense } from "react";

// reacr-router
import { Outlet } from "react-router-dom";

//react bootstrap
import { Container } from "react-bootstrap";

// subheader
import Subheader from "../components/custom/Subheader";

// sidebar
import SidebarStyle from "../components/partials/dashboard/sidebar/sidebar";

// footer
import FooterStyle from "../components/partials/dashboard/footer/FooterStyle";

//seetingoffCanvas
import SettingOffCanvas from "../components/setting/SettingOffCanvas";

// Import selectors & action from setting store
import * as SettingSelector from "../store/setting/selectors";

// Redux Selector / Action
import { useSelector } from "react-redux";

const DashboardLayout = memo((props) => {
  const pageLayout = useSelector(SettingSelector.page_layout);
  return (
    <Fragment>
      <div className="wrapper">
        <SidebarStyle />
        <main className="main-content">
          <div className="position-relative">
            {props.isBanner == "true" ? <Subheader /> : ""}
          </div>
          <div className={` ${pageLayout} content-inner pb-0`}>
            <Suspense fallback={<div className="react-load"></div>}>
              <Outlet></Outlet>
            </Suspense>
          </div>
          <FooterStyle />
        </main>
      </div>
      <SettingOffCanvas />
    </Fragment>
  );
});

DashboardLayout.displayName = "DashboardLayout";
export default DashboardLayout;
