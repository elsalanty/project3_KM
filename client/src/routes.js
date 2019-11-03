/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
//import Dashboard from "views/Dashboard.jsx";
//import UserProfile from "views/UserProfile.jsx";
//import TableList from "views/TableList.jsx";
//import Typography from "views/Typography.jsx";
//import Icons from "views/Icons.jsx";
//import Maps from "views/Maps.jsx";
//import Notifications from "views/Notifications.jsx";
import Modules from "./pages/Modules"
import Quizes from "./pages/Quizes"

const dashboardRoutes = [
  {
    path: "/modules",
    name: "Modules",
    icon: "pe-7s-graph",
    component: Modules,
    layout: "/admin"
  },
  {
    path: "/quizes",
    name: "Quizes",
    icon: "pe-7s-note2",
    component: Quizes,
    layout: "/admin"
  },
  /*{
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },  
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "pe-7s-science",
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  }*/
];

export default dashboardRoutes;