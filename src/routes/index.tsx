import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../404";

const ErrorPage = lazy(() => import("../ErrorPage"));
const DetailView = lazy(() => import("../views/DetailView"));
const SearchView = lazy(() => import("../views/SearchView"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SearchView />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/details/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <DetailView />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
