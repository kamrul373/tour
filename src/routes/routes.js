import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";

export const router = createBrowserRouter( [
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>
			},
			{
				path: "/login",
				element: <Login></Login>
			}
		]
	},
	{
		path: "/dashboard",
		element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard></Dashboard>
			}
		]
	}
] )