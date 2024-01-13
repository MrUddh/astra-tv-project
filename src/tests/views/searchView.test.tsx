import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { HttpResponse, http } from "msw";
import { setupServer } from "msw/node";
import SearchView from "../../views/SearchView";

const server = setupServer(
  http.get("https://api.tvmaze.com/search/shows?q=boys", () => {
    return HttpResponse.json([
      {
        score: 0.86515516,
        show: {
          id: 31910,
          name: "Boys",
          genres: ["Drama"],
          summary: "<p>A story of two boys looking for their identity...</p>",
        },
      },
      {
        score: 15299,
        show: {
          id: 15299,
          name: "The Boys",
          genres: ["Drama", "Action", "Science-Fiction"],
          summary: "<p>A story of more boys looking for their car...</p>",
        },
      },
    ]);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("SearchView", () => {
  it("renders correctly", () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <SearchView />
      </QueryClientProvider>
    );

    expect(screen.getByText("Astra TV-Series")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Search")).toBeInTheDocument();
  });

  it("handles search input", async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <SearchView />
      </QueryClientProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "Boys" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    await waitFor(() => {
      const seriesNames = screen.getAllByText(/Boys/);
      expect(seriesNames.length).toBeGreaterThan(0);
    });
  });

  it("clears search results", async () => {
    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <SearchView />
      </QueryClientProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Search"), {
      target: { value: "Boys" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Search" }));

    fireEvent.click(screen.getByRole("clear-search"));

    await waitFor(() => {
      expect(screen.queryByText("Boys")).not.toBeInTheDocument();
      expect(screen.queryByText("The Boys")).not.toBeInTheDocument();
    });
  });
});
