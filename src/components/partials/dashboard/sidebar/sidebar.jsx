import { useEffect, memo, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import VerticalNav from "./vertical-nav";
import Scrollbar from "smooth-scrollbar";
import * as SettingSelector from "../../../../store/setting/selectors";
import { useSelector } from "react-redux";

const Sidebar = memo(() => {
  const sidebarColor = useSelector(SettingSelector.sidebar_color);
  const sidebarType = useSelector(SettingSelector.sidebar_type);
  const sidebarMenuStyle = useSelector(SettingSelector.sidebar_menu_style);

  const [logo, setLogo] = useState("logo-full");
  const minisidebar = () => {
    document.getElementsByTagName("ASIDE")[0].classList.toggle("sidebar-mini");
    setLogo(logo === "logo-full" ? "logo-mini" : "logo-full");
  };

  useEffect(() => {
    Scrollbar.init(document.querySelector("#my-scrollbar"));

    window.addEventListener("resize", () => {
      const tabs = document.querySelectorAll(".nav");
      const sidebarResponsive = document.querySelector(
        '[data-sidebar="responsive"]'
      );
      if (window.innerWidth < 1025) {
        Array.from(tabs, (elem) => {
          if (
            !elem.classList.contains("flex-column") &&
            elem.classList.contains("nav-tabs") &&
            elem.classList.contains("nav-pills")
          ) {
            elem.classList.add("flex-column", "on-resize");
          }
          return elem.classList.add("flex-column", "on-resize");
        });
        if (sidebarResponsive !== null) {
          if (!sidebarResponsive.classList.contains("sidebar-mini")) {
            sidebarResponsive.classList.add("sidebar-mini", "on-resize");
          }
        }
      } else {
        Array.from(tabs, (elem) => {
          if (elem.classList.contains("on-resize")) {
            elem.classList.remove("flex-column", "on-resize");
          }
          return elem.classList.remove("flex-column", "on-resize");
        });
        if (sidebarResponsive !== null) {
          if (
            sidebarResponsive.classList.contains("sidebar-mini") &&
            sidebarResponsive.classList.contains("on-resize")
          ) {
            sidebarResponsive.classList.remove("sidebar-mini", "on-resize");
          }
        }
      }
    });
  });

  return (
    <Fragment>
      <aside
        className={`${sidebarColor} ${sidebarType.join(
          " "
        )} ${sidebarMenuStyle} sidebar sidebar-base  navs-rounded-all`}
        data-sidebar="responsive"
      >
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <Link to="/" className="navbar-brand">
            <h3
              className="logo-title mb-0"
              style={{
                fontWeight: 100,
                // letterSpacing: 1,
                color: "White", // vibrant teal
                fontSize: logo === "logo-full" ? 28 : 18,
                transition: "all 0.3s",
                // textTransform: "uppercase",
                minWidth: 0,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              PrimeAdmin
            </h3>
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
            onClick={minisidebar}
          >
            {logo === "logo-full" ? (
              <i className="icon">
                <i className="fa-solid fa-angles-right fa-rotate-180"></i>
              </i>
            ) : (
              <i className="icon">
                <i className="fa-solid fa-angles-right"></i>
              </i>
            )}
          </div>
        </div>
        <div
          className="pt-0 sidebar-body data-scrollbar"
          data-scroll="1"
          id="my-scrollbar"
        >
          {/* sidebar-list class to be added after replace css */}
          <div className="sidebar-list" id="sidebar">
            <VerticalNav />
          </div>
        </div>
        <div className="sidebar-footer"></div>
      </aside>
    </Fragment>
  );
});

Sidebar.displayName = "Sidebar";
export default Sidebar;
