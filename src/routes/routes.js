import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../Error";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
            },
        ]
    }
])