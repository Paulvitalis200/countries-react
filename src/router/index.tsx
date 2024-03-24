import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/country/:name",
    element: <CountryPage />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
