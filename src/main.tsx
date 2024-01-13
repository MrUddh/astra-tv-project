import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import "./styles/main.css";
import { logErrorToService } from "./utils";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallback={<div>"error fallback component" -Try refresh</div>}
        onError={logErrorToService}
      >
        <RouterProvider router={router} />
        {/* <TestErrorComponent /> */}
      </ErrorBoundary>
    </QueryClientProvider>
  </React.StrictMode>
);
