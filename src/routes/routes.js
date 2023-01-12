import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Banner from "../pages/Banner";
import SocialMedia from "../pages/SocialMedia";
import Subscriber from "../pages/Subscriber";
import AddExploreSlide from "../pages/AddExploreSlide";
import ExploreSlides from "../pages/ExploreSlides";
import ExploreContent from "../pages/ExploreContent";
import BannerContent from "../pages/BannerContent";
import AddBannerSlide from "../pages/AddBannerSlide";
import BannerSlides from "../pages/BannerSlides";

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
			},
			{
				path: "/dashboard/banner",
				element: <Banner></Banner>
			},
			{
				path: "/dashboard/social",
				element: <SocialMedia></SocialMedia>
			},
			{
				path: "/dashboard/subscribers",
				element: <Subscriber></Subscriber>
			},
			{
				path: "/dashboard/addexploreslide",
				element: <AddExploreSlide></AddExploreSlide>
			},
			{
				path: "/dashboard/exploreslides",
				element: <ExploreSlides></ExploreSlides>
			},
			{
				path: "/dashboard/updateexplorecntent",
				element: <ExploreContent></ExploreContent>
			},
			{
				path: "/dashboard/bannercontnet",
				element: <BannerContent></BannerContent>
			},
			{
				path: "/dashboard/addbannerslide",
				element: <AddBannerSlide></AddBannerSlide>
			},
			{
				path: "/dashboard/bannerslides",
				element: <BannerSlides></BannerSlides>
			}
		]
	}
] )