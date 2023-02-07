import { Navigate } from "react-router-dom";
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Register from "../pages/Authentication/Register";

import Dashboard from "../pages/Client/Dashboard";
import NewProject from "../pages/Client/Projects/NewProject";
import ExistingProjects from "../pages/Client/Projects/ExistingProjects";
import Drafts from "../pages/Client/Projects/Drafts";
import Reports from "../pages/Client/Reports";
import Consulting from "../pages/Client/Consulting";
import Tickets from "../pages/Client/Tickets";
import FormulationLibrary from "../pages/Client/FormulationLibrary";

import Formulation from "../pages/Client/Projects/NewProject/Formulation";
import Testing from "../pages/Client/Projects/NewProject/Testing";
import Manufacturing from "../pages/Client/Projects/NewProject/Manufacturing.js";
import Packaging from "../pages/Client/Projects/NewProject/Packaging";
import Launch from "../pages/Client/Projects/NewProject/Launch";
import Review from "../pages/Client/Projects/NewProject/Review";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/newProject", component: <NewProject /> },

  { path: "/existingProjects", component: <ExistingProjects /> },
  { path: "/drafts", component: <Drafts /> },
  { path: "/reports", component: <Reports /> },
  { path: "/consulting", component: <Consulting /> },
  { path: "/formulationLibrary", component: <FormulationLibrary /> },
  { path: "/tickets", component: <Tickets /> },
  { path: "/formulation", component: <Formulation /> },
  { path: "/testing", component: <Testing /> },
  { path: "/manufacturing", component: <Manufacturing /> },
  { path: "/packaging", component: <Packaging /> },
  { path: "/launch", component: <Launch /> },
  { path: "/review", component: <Review /> },
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];
const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
