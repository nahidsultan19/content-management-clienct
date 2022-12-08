import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import About from "../pages/About";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    }
]);

export default routes;