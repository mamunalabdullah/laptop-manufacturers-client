import Blogs from "../Pages/Blogs";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFound";

export const PublicRoutes = [
    {path: "/", name: "Home", Component: Home},
    {path: "home", name: "Home", Component: Home},
    {path: "blogs", name: "Blogs", Component: Blogs},
    {path: "login", name: "Login", Component: Login},
    {path: "register", name: "Register", Component: Register},
    {path: "*", name: "NotFound", Component: NotFound},
]