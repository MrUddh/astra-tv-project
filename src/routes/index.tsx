import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../ErrorPage";
import DetailView from "../views/DetailView";
import SearchView from "../views/SearchView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/details/:id",
    element: <DetailView />,
  },
]);
