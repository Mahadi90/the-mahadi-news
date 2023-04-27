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
                element: <NewsDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
   }
])

export default router;