import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Authenticated from "../features/auth/Authenticated";
import RedirectIfAuthenticate from "../features/auth/RedirectIfAuthenticate";
import PiggyGoalsPage from "../pages/PiggyGoalsPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "", element: <HomePage />},
            {path: "/profile/:profileId", element: <Authenticated><ProfilePage /></Authenticated>},
            {path: "/piggygoals/:piggygoalsId", element: <Authenticated><PiggyGoalsPage /></Authenticated>},
            {path: "/login", element: <RedirectIfAuthenticate><LoginPage /></RedirectIfAuthenticate>},
            {path: "/register", element: <RedirectIfAuthenticate><RegisterPage /></RedirectIfAuthenticate>},
        ],
    },
    {
        path: "*",
        element: <Authenticated />,
    },
]);

export default function Route() {
    return <RouterProvider router={router} />
};