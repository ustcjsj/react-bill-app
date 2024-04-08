import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import New from "../pages/New";
import Month from "../pages/Month";
import Year from "../pages/Year";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'month',
        // index:true,
        element: <Month />
      },
      {
        path: "year",
        element: <Year />
      },
    ]
  },
  {
    path: "/new",
    element: <New />,
  },
  {
    path: '*',
    element: <div>404</div>
  }
]);

export default router;