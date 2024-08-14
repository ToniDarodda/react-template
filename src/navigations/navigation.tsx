import { createBrowserRouter } from "react-router-dom";

import {
    WelcomeScreen,
    LoginScreen,
    RegisterScreen,
    HomeScreen,
} from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WelcomeScreen />,
    },
    {
        path: "/sign-in",
        element: <LoginScreen />,
    },
    {
        path: "/sign-up",
        element: <RegisterScreen />,
    },
    {
        path: "/home",
        element: <HomeScreen />,
    },
]);
