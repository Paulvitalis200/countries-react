import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CountryPage from "../pages/CountryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/country/:id",
    element: <CountryPage />,
  },
]);

export default router;
