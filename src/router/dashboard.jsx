import React from "react";

// layout
import DashboardLayout from "../layouts/dashboard-layout";
import BlankLayout from "../layouts/blank-layout";

// pages
import Dashboard from "../views/dashboard/dashboard.jsx";
import RatingPaage from "../views/dashboard/rating-page.jsx";
import CommentList from "../views/dashboard/comment-list";
import Pricing from "../views/dashboard/special-pages/pricing";
import SignIn from "../views/dashboard/auth/signin";
import SignUp from "../views/dashboard/auth/signup";
import ConfirmMail from "../views/dashboard/auth/confirmmail";
import LockScreen from "../views/dashboard/auth/lockscreen";
import Recoverpw from "../views/dashboard/auth/recoverpassword";
import TwoFactor from "../views/dashboard/auth/two-factor";
import AccountDeactive from "../views/dashboard/auth/account-deactivate";
import UserAdd from "../views/dashboard/app/user-add";
import UserList from "../views/dashboard/app/user-list";
import UserProfile from "../views/dashboard/app/user-profile";
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";
import Maintenance from "../views/dashboard/errors/maintainance";
import Avatars from "../views/uikit/avatars";
import Alerts from "../views/uikit/alert";
import Badges from "../views/uikit/badge";
import Breadcrumb from "../views/uikit/breadcrumb";
import Buttons from "../views/uikit/button";
import ButtonGroups from "../views/uikit/buttons-group";
import OffCanvass from "../views/uikit/off-canvas";
import Cards from "../views/uikit/card";
import Carousels from "../views/uikit/carousel";
import Grids from "../views/uikit/grid";
import Images from "../views/uikit/image";
import ListGroups from "../views/uikit/list-group";
import Modals from "../views/uikit/modal";
import Notifications from "../views/uikit/notification";
import Paginations from "../views/uikit/pagination";
import Popovers from "../views/uikit/popovers";
import Progressbars from "../views/uikit/progress";
import Typographys from "../views/uikit/typography";
import UiTabs from "../views/uikit/tabs";
import Tooltips from "../views/uikit/tooltip";
import EmbedVideos from "../views/uikit/embed-video";
import Colors from "../views/uikit/colors";
import FormElement from "../views/dashboard/form/form-element";
import FormValidation from "../views/dashboard/form/form-validation";
import FormWizard from "../views/dashboard/form/form-wizard";
import BootstrapTable from "../views/dashboard/table/bootstrap-table";
import Borderedtable from "../views/dashboard/table/border-table";
import Datatable from "../views/dashboard/table/Data-table";
import Episodes from "../views/dashboard/tv-shows/episodes";
import Seasons from "../views/dashboard/tv-shows/seasons";
import ShowList from "../views/dashboard/tv-shows/showlist";
import MovieList from "../views/dashboard/tv-shows/movielist";
import Widgetbasic from "../views/dashboard/widget/widgetbasic";
import Widgetcard from "../views/dashboard/widget/widgetcard";
import Widgetchart from "../views/dashboard/widget/widgetchart";
import ComingSoon from "../views/dashboard/errors/coming-soon";
import BasicTable from "../views/dashboard/table/fixed-table";
import BlankPage from "../views/dashboard/extra/blankpages";
import FontAwesome from "../views/dashboard/icons/font-awesome";
import Accesscontrol from "../views/dashboard/Accesscontrol";
import ModulesList from "../views/dashboard/app/modules-list";
import ProgramPriceList from "../views/dashboard/app/program-price-list";
import PhasesList from "../views/dashboard/app/phases-list";
import SessionsList from "../views/dashboard/app/sessions-list";
import AssessmentQuestionsList from "../views/dashboard/app/assessment-questions-list";
import DicomObservationTitlesList from "../views/dashboard/app/dicom-observation-titles-list";
import SessionResourcesList from "../views/dashboard/app/session-resources-list";
import FacultyList from "../views/dashboard/app/faculty-list";
import CouponsList from "../views/dashboard/app/coupons-list";
import SponsorsList from "../views/dashboard/app/sponsors-list";
import SponsorMembersList from "../views/dashboard/app/sponsor-members-list";
import NotificationsList from "../views/dashboard/app/notifications-list";
import CreateForm from "../views/dashboard/app/create-form";
import PathologiesList from "../views/dashboard/app/pathologies-list";
import PackagesList from "../views/dashboard/app/packages-list";

export const DashboardRouter = [
  {
    path: "",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
        name: "home",
      },

      {
        path: "/rating-page",
        element: <RatingPaage />,
        name: "Rating",
      },
      {
        path: "/comment-list",
        element: <CommentList />,
        name: "Comments",
      },

      {
        path: "/special-pages/pricing",
        element: <Pricing />,
        name: "Pricing",
      },
      {
        path: "/app/user-profile",
        element: <UserProfile />,
      },
      {
        path: "/app/user-add",
        element: <UserAdd />,
      },
      {
        path: "/app/user-list",
        element: <UserList />,
        name: "User List",
      },
      {
        path: "/lists/modules",
        element: <ModulesList />,
        name: "Modules List",
      },
      {
        path: "/lists/program-price",
        element: <ProgramPriceList />,
        name: "Program Price List",
      },
      {
        path: "/lists/phases",
        element: <PhasesList />,
        name: "Phases List",
      },
      {
        path: "/lists/sessions",
        element: <SessionsList />,
        name: "Sessions List",
      },
      {
        path: "/lists/packages",
        element: <PackagesList />,
        name: "Packages List",
      },
      {
        path: "/lists/assessment-questions",
        element: <AssessmentQuestionsList />,
        name: "Assessment Questions List",
      },
      {
        path: "/lists/dicom-observation-titles",
        element: <DicomObservationTitlesList />,
        name: "Dicom Observation Titles List",
      },
      {
        path: "/lists/session-resources",
        element: <SessionResourcesList />,
        name: "Session Resources List",
      },
      {
        path: "/lists/faculty",
        element: <FacultyList />,
        name: "Faculty List",
      },
      {
        path: "/lists/coupons",
        element: <CouponsList />,
        name: "Coupons List",
      },
      {
        path: "/lists/sponsors",
        element: <SponsorsList />,
        name: "Sponsors List",
      },
      {
        path: "/lists/sponsor-members",
        element: <SponsorMembersList />,
        name: "Sponsor Members List",
      },
      {
        path: "/lists/notifications",
        element: <NotificationsList />,
        name: "Notifications List",
      },
      {
        path: "/lists/pathologies",
        element: <PathologiesList />,
        name: "Pathologies List",
      },
      {
        path: "/create/:type",
        element: <CreateForm />,
      },

      {
        path: "/ui-elements/avatars",
        element: <Avatars />,
        name: "Ui-Avatars",
      },

      {
        path: "/ui-elements/alerts",
        element: <Alerts />,
        name: "Ui-Alerts",
      },
      {
        path: "/ui-elements/badges",
        element: <Badges />,
        name: "Ui-Badges",
      },
      {
        path: "/ui-elements/breadcrumb",
        element: <Breadcrumb />,
        name: "Ui-Breadcrumb",
      },
      {
        path: "/ui-elements/buttons",
        element: <Buttons />,
        name: "Ui-Buttons",
      },
      {
        path: "/ui-elements/button-group",
        element: <ButtonGroups />,
        name: "Ui-Button-Group",
      },
      {
        path: "/ui-elements/offcanvas",
        element: <OffCanvass />,
        name: "Ui-Offcanvas",
      },
      {
        path: "/ui-elements/color",
        element: <Colors />,
        name: "Ui-Color",
      },
      {
        path: "/ui-elements/cards",
        element: <Cards />,
        name: "Ui-Cards",
      },
      {
        path: "/ui-elements/carousel",
        element: <Carousels />,
        name: "Ui-Carousel",
      },
      {
        path: "/ui-elements/grid",
        element: <Grids />,
        name: "Ui-Grid",
      },
      {
        path: "/ui-elements/images",
        element: <Images />,
        name: "Ui-Images",
      },
      {
        path: "/ui-elements/list-groups",
        element: <ListGroups />,
        name: "Ui-List-Groups",
      },
      {
        path: "/ui-elements/modal",
        element: <Modals />,
        name: "Ui-Modal",
      },
      {
        path: "/ui-elements/notifications",
        element: <Notifications />,
        name: "Ui-Notifications",
      },
      {
        path: "/ui-elements/pagination",
        element: <Paginations />,
        name: "Ui-Pagination",
      },
      {
        path: "/ui-elements/popovers",
        element: <Popovers />,
        name: "Ui-Popovers",
      },
      {
        path: "/ui-elements/progressbars",
        element: <Progressbars />,
        name: "",
      },
      {
        path: "/ui-elements/typography",
        element: <Typographys />,
        name: "Ui-Typography",
      },
      {
        path: "/ui-elements/tabs",
        element: <UiTabs />,
        name: "Ui-Tabs",
      },
      {
        path: "/ui-elements/tooltips",
        element: <Tooltips />,
        name: "Ui-Tooltips",
      },

      {
        path: "/ui-elements/embed-video",
        element: <EmbedVideos />,
        name: "Ui-Embed-Video",
      },
      {
        path: "/form/form-element",
        element: <FormElement />,
        name: "Form-Elelment",
      },
      {
        path: "/form/form-wizard",
        element: <FormWizard />,
        name: "Form Wizard",
      },
      {
        path: "/form/form-validation",
        element: <FormValidation />,
        name: "Form-Validation",
      },
      {
        path: "/table/bootstrap-table",
        element: <BootstrapTable />,
        name: "Bootstrap Table",
      },
      {
        path: "/table/border-table",
        element: <Borderedtable />,
        name: "Border Table",
      },
      {
        path: "/table/Datatable",
        element: <Datatable />,
        name: "Data Table",
      },
      {
        path: "/widgetbasic",
        element: <Widgetbasic />,
        name: "Widgets Basic",
      },
      {
        path: "/widgetchart",
        element: <Widgetchart />,
        name: "Widgets Chart",
      },
      {
        path: "/widgetcard",
        element: <Widgetcard />,
        name: "Widgets Card",
      },
      {
        path: "/table/fixed-table",
        element: <BasicTable />,
        name: "Fixed Table",
      },
    ],
  },
  {
    path: "/",
    element: <DashboardLayout isBanner="true" />,
    children: [
      {
        path: "/tv-shows/episodes",
        element: <Episodes />,
        name: "Episodes",
      },
      {
        path: "/tv-shows/seasons",
        element: <Seasons />,
        name: "Seasons",
      },
      {
        path: "/tv-shows/showlist",
        element: <ShowList />,
        name: "Show Lists",
      },
      {
        path: "/tv-shows/movielist",
        element: <MovieList />,
        name: "Movie List",
      },
      {
        path: "/extra/blank-page",
        element: <BlankPage />,
        name: "Blank Page  ",
      },
      {
        path: "/font-awesome",
        element: <FontAwesome />,
        name: "Font Awesome",
      },
      {
        path: "/access-control",
        element: <Accesscontrol />,
        name: "Access Control",
      },
    ],
  },
];

export const ErrorRoutes = [
  {
    path: "/errors",
    element: <BlankLayout />,
    children: [
      {
        path: "/errors/error-404",
        element: <Error404 />,
      },
      {
        path: "/errors/error-500",
        element: <Error500 />,
      },
      {
        path: "/errors/maintenance",
        element: <Maintenance />,
      },
      {
        path: "/errors/coming-soon",
        element: <ComingSoon />,
      },
    ],
  },
];
export const AuthRuter = [
  {
    path: "/auth",
    element: <BlankLayout />,
    children: [
      {
        path: "/auth/sign-in",
        element: <SignIn />,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp />,
      },

      {
        path: "/auth/confirm-mail",
        element: <ConfirmMail />,
      },

      {
        path: "/auth/lock-screen",
        element: <LockScreen />,
      },

      {
        path: "/auth/recoverpw",
        element: <Recoverpw />,
      },
      {
        path: "/auth/two-factor",
        element: <TwoFactor />,
      },

      {
        path: "/auth/account-deactivate",
        element: <AccountDeactive />,
      },
    ],
  },
];
