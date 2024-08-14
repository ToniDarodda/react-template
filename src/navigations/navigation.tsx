import { createBrowserRouter, Navigate } from "react-router-dom";

import {
    LoginScreen,
    RegisterScreen,
    HomeScreen,
    WelcomeScreen,
} from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/sign-up" replace={true} />,
    },
    {
        path: "/sign-up",
        element: <RegisterScreen />,
    },
    {
        path: "/sign-in",
        element: <LoginScreen />,
    },
    {
        path: "/welcome",
        element: <WelcomeScreen />,
    },
    {
        path: "/home",
        element: <HomeScreen />,
    },
]);
