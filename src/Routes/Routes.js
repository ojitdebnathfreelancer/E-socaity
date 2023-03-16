import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import NewsFeed from "../Pages/NewsFeed/NewsFeed";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/newsfeed',
        element: <Main />,
        children: [
            {
                path: '/newsfeed',
                element: <NewsFeed />
            }
        ]
    }
]);

export default router;