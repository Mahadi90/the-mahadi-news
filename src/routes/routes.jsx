import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NewsLayout from "../layout/NewsLayout";
import Category from "../pages/Home/Category/Category";
import NewsDetails from "../pages/Home/NewsDetails";
import Login from "../LoginLayout/Login";
import Register from "../LoginLayout/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Category></Category>,
                loader: () => fetch('http://localhost:5000/news')
            },
            {
                path: "/category/:id",
                element:<Category/>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element:<NewsLayout/>,
        children: [
            {
                path: '/news/:id',
                element: <PrivateRoute><NewsDetails/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
   },{
    path: 'login',
    element: <Login></Login>
   },{
    path: 'register',
    element: <Register></Register>
   }
])

export default router;