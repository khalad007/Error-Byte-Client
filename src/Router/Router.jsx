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
import SingleClass from "../Pages/AllClasses/SingleClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Cart from "../Pages/Dashboard/Cart/Cart";
import PrivateRoutes from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyEnrollClass from "../Pages/Dashboard/MyEnrollClass/MyEnrollClass";
import TeacherRequest from "../Pages/Dashboard/TeacherRequest/TeacherRequest";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import UpdateClass from "../Pages/Dashboard/UpdateClass/UpdateClass";
import MyClassDetails from "../Pages/Dashboard/MyClassDetails/MyClassDetails";
import AllClassForAdmin from "../Pages/Dashboard/AllClassForAdmin/AllClassForAdmin";
import SeeProgress from "../Pages/Dashboard/SeeProgress/SeeProgress";
import MyEnrollAss from "../Pages/Dashboard/MyEnrollClass/MyEnrollAss";

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
                element: <PrivateRoutes><TechOnErrByte></TechOnErrByte></PrivateRoutes>,
                
            },
            {
                path: 'allClasses',
                element: <AllClasses></AllClasses>
            },
            {
                path: '/singleClassDetails/:id',
                element: <SingleClass></SingleClass>,
                loader: ({ params }) => fetch(`http://localhost:5000/allClasses/${params.id}`)
            },
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
                path: 'enrollClass',
                element: <MyEnrollClass></MyEnrollClass>
            },
            {
                path: 'review',
                element: <Review></Review>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'teacherRequest',
                element: <TeacherRequest></TeacherRequest>
            },
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myClass',
                element: <MyClass></MyClass>
            },
            {
                path: 'updateItem/:id',
                element: <UpdateClass></UpdateClass>,
                loader: ({params}) => fetch(`http://localhost:5000/myClss/${params.id}`)
            },
            {
                path: 'myClass/:id',
                element: <MyClassDetails></MyClassDetails>
            },
            {
                path: 'allClassForAdmin',
                element: <AllClassForAdmin></AllClassForAdmin>
            },
            {
                path: 'seeProgress/:id',
                element: <SeeProgress></SeeProgress>
            },
            {
                path: 'enrollClass/:id',
                element: <MyEnrollAss></MyEnrollAss>
            }
        ]
    }
]);