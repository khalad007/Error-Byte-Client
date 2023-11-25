import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import StudentHome from "../Pages/Dashboard/StudentHome/StudentHome";
import Review from "../Pages/Dashboard/Review/Review";
import TechOnErrByte from "../Pages/Home/TechOnErrByte/TechOnErrByte";
import AllClasses from "../Pages/AllClasses/AllClasses";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'techOnErrByte',
                element: <TechOnErrByte></TechOnErrByte>
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'studentHome',
                element: <StudentHome></StudentHome>
            },
            {
                path: 'review',
                element: <Review></Review>
            }
        ]
    }
]);