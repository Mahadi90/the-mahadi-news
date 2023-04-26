import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import NewsLayout from "../layout/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import NewsDetails from "../pages/Home/NewsDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: "/category/:id",
                element:<Category/>
            }
        ]
    },
    {
        path: 'news',
        element:<NewsLayout/>,
        children: [
            {
                path: 'news/:id',
                element: <NewsDetails/>
            }
        ]
   }
])

export default router;