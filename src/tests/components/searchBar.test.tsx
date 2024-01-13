import { fireEvent, render, screen } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";
describe("SearchBar", () => {
  it("should render the SearchBar component", () => {
    const setSearchQueryCb = vi.fn();
    render(<SearchBar setSearchQueryCb={setSearchQueryCb} />);
    expect(screen.getByRole("search")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should render the SearchBar component with a disabled button", () => {
    const setSearchQueryCb = vi.fn();
    render(<SearchBar setSearchQueryCb={setSearchQueryCb} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("should render the SearchBar component with an enabled button", () => {
    const setSearchQueryCb = vi.fn();
    render(<SearchBar setSearchQueryCb={setSearchQueryCb} />);
    const input = screen.getByPlaceholderText("Search");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "test" } });
    expect(button).toBeEnabled();
  });
});
