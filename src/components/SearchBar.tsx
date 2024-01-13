import { useState } from "react";
import s from "../styles/components/searchBar.module.css";

type SearchBarProps = {
  setSearchQueryCb: (searchQuery: string) => void;
};

const SearchBar = ({ setSearchQueryCb }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sanitizedInput = encodeURIComponent(searchTerm);
    setSearchQueryCb(sanitizedInput);
    setSearchTerm("");
  };

  return (
    <>
      <form id={s.searchForm} role="search" onSubmit={handleSubmit}>
        <input
          id="q"
          aria-label="Search series"
          placeholder="Search"
          type="search"
          name="q"
          value={searchTerm}
          onChange={handleInput}
        />
        <div id="search-spinner" aria-hidden hidden={true} />
        <div className="sr-only" aria-live="polite"></div>
        <button type="submit" disabled={searchTerm?.length < 1}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;
