import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailView from "../../views/DetailView";

const server = setupServer(
  http.get("https://api.tvmaze.com/shows/:id", () => {
    return HttpResponse.json({
      id: 15299,
      name: "The Boys",
      genres: ["Drama", "Action", "Science-Fiction"],
      summary: "Test Summary",
    });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("DetailView", () => {
  it("renders DetailView and displays show details", async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/details/15299"]}>
          <Routes>
            <Route path="/details/:id" element={<DetailView />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("The Boys")).toBeInTheDocument();
      expect(screen.getByText("Drama")).toBeInTheDocument();
      expect(screen.getByText("Action")).toBeInTheDocument();
      expect(screen.getByText("Science-Fiction")).toBeInTheDocument();
      expect(screen.getByText("Test Summary")).toBeInTheDocument();
    });
  });
});
