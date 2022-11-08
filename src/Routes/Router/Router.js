import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Signup from "../../Pages/SignUp/Signup";

// Create Browser Router
const router = createBrowserRouter( [
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/reviews',
                element: <MyReviews/>
            },
            {
                path: '/service',
                element: <AddService/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
        ]
    }
]);
export default router;