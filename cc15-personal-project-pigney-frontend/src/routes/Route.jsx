import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {path: "", element: <HomePage />},
            {path: "/profile/:profileId", element: <ProfilePage />},
            {path: "/login", element: <LoginPage />},
            {path: "/register", element: <RegisterPage />},
        ],
    },
]);

export default function Route() {
    return <RouterProvider router={router} />
};