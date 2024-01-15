# Astra TV-series is a React + TypeScript + Vite project

### Here is a link to the project hosted on Vercel: [Astra TV-Series](https://astra-tv-project-89yr.vercel.app/)

> Astra TV-series is a web application built with React, TypeScript, and Vite. It provides a user-friendly interface to browse and explore various TV series. Leveraging modern web technologies, the project offers fast performance, reusable components, and strong type safety. Hosted on Vercel

- To get started, make sure you have node installed and a minimum version of `v12.0.0` to be able to run the project. (But to be able to also run the Vite test client you need at least `v18.0.0`.)

- Clone this repo and run:

```bash
  cd astra-test
  npm install
  npm run dev
```

## The project

### `Components`:

- Individual UI elements that can be reused.

### `Views`:

- Represent entire pages or major sections of the app.

### `Types`:

- TypeScript definitions.

### `Services`:

- Abstracting API calls away from the UI components.

### `Utils`:

- Helper functions that can be used throughout the application.

### `Styles`:

- Central location for all styling-related files.
- (This project use css.modules)

### `Routes`:

- The routes directory contains the routing logic for the application, defining how the application navigates between the SearchView and DetailView. It utilizes React Router. As well as 404 and ErrorElement.

### `Tests`:

- The tests directory is structured to mirror the src directory. It includes subdirectories for components, views, and utility functions. Each file in these directories have corresponding test files to ensure thorough testing.
- The project is using Vitest that extends `react-testing-lib`. It's recommended to use the `vitest`-plugin to get a more fine grained handling of tests. That is however not mandatory. `npm run test` works fine as well

## To run the test for the project run the following

```bash
npm run test
```

## Lazy Loading

In this application, i use React's `lazy` and `Suspense` features to lazily load components. This means that some components, like `ErrorPage`, `DetailView`, and `SearchView`, are not loaded until they are actually needed, which can help improve the performance of the application.

Here's an example of how i do this:

```javascript
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
  /*... 
      More code
                ...*/
]);
```

## Using Husky for Git Hooks

This project uses [Husky](https://typicode.github.io/husky/#/) to manage Git hooks. Git hooks are scripts that run automatically when certain Git events occur.

Husky is configured to run `npm run lint` before each commit and `npm run test` before each push. This ensures that all changes are validated for coding style issues (linting) and all tests pass before they are committed or pushed to the repository.

This helps maintain code quality and prevent introduction of errors or inconsistencies.
