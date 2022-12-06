import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import AllService from "../../Pages/Home/Services/AllService";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import UpdateReview from "../../Pages/MyReview/UpdateReview";
import ServiceReview from "../../Pages/ServiceReview/ServiceReview";
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
                path: '/review',
                element: <MyReview/>
            },
            {
                path: '/allservices',
                element: <AllService/>
            },
            {
                path: '/services/:id',
                element: <ServiceReview/>
            },
            {
                path: '/service',
                element: <AddService/>
            },
            {
                path: '/blog',
                element: <Blog/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/reviews/update/:id',
                element: <UpdateReview/>
            }
        ]
    }
]);
export default router;