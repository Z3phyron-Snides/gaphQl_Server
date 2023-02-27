import { createBrowserRouter } from "react-router-dom";
//layouts
import Layout from "../common/layouts";
import Root from "../common/layouts/root";

//pages
import Home from "../pages/home";
// import Profile from "../pages/profile";


import NotFound from "../pages/notFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
        
        ],
      },
    
      {
        // This is the notFound route
        path: "*",
        element: <NotFound/>,
      },
    ],
  },
]);

export default router;
