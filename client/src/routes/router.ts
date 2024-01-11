import {
    createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import LoginPage from "../Login";
import SignupPage from "../SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
    {
        path: "/signin",
        Component: LoginPage,
    },
    {
        path: "/signup",
        Component: SignupPage,
    },
]);

export default router;