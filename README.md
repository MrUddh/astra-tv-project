# Astra TV-series is a React + TypeScript + Vite project

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

### `Routes`:

- The routes directory contains the routing logic for the application, defining how the application navigates between the SearchView and DetailView. It utilizes React Router.

### `Tests`:

- The tests directory is structured to mirror the src directory. It includes subdirectories for components, views, and utility functions. Each file in these directories have corresponding test files to ensure thorough testing.

## To run the test for the project run the following

```bash
npm run test
```

- This project is built with Vite so it will run the vitest for you.
