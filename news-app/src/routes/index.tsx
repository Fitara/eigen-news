import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import NewsDetail from "../pages/Detail";
import Layout from "../components/Layout"

const routes: RouteObject[] = [
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/detail/:title",
                element: <NewsDetail />
            }
        ]
    }
]

const router = createBrowserRouter(routes)
export default router