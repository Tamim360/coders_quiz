import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import QuizDetails from "../components/QuizDetails/QuizDetails";
import Statistics from "../components/Statistics/Statistics";
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
            {
                path: '/quiz/:quizId',
                element: <QuizDetails />,
                loader: async ({params}) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
            },
            {
                path: '/statistics',
                element: <Statistics />,
                loader: async () => fetch('https://openapi.programming-hero.com/api/quiz')
            }
        ]
    }
])