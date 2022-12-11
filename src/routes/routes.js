import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import About from "../pages/Main/About";
import AddCourse from "../pages/Dashboard/AddCourse";
import CourseList from "../pages/Dashboard/CourseList";
import Home from "../pages/Main/Home";

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
            },
            {
                path: 'dashboard',
                element: <Dashboard />,
                children: [
                    {
                        path: 'dashboard',
                        element: <CourseList />
                    },
                    {
                        path: 'add-course',
                        element: <AddCourse />
                    }
                ]
            }

        ]
    }
]);

export default routes;