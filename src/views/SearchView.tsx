import { Suspense, lazy, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { useGetSeries } from "../hooks/queries";
import s from "../styles/views/searchView.module.css";
import { TVMazeApiArrayResponse } from "../types";
const SeriesList = lazy(() => import("../components/SeriesList/SeriesList"));

const SearchView = () => {
  const initialSearchQuery = localStorage.getItem("searchQuery") || "";
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const { data: series, isError } = useGetSeries(searchQuery);
  const closeIcon = String.fromCharCode(parseInt("2718", 16));

  useEffect(() => {
    localStorage.setItem("searchQuery", searchQuery);
  }, [searchQuery]);

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  return (
    <>
      <img className={s.logo} src="/searchLogo.webp" alt="Astra Logo" />
      <div className={s.searchView}>
        <h1>Astra TV-Series</h1>
        <p>- Search for your favorite TV-Series</p>
        <SearchBar setSearchQueryCb={setSearchQuery} />
        {searchQuery && (
          <div className={s.close}>
            <div>
              <i>Search term:</i> "{decodeURI(searchQuery)}"
            </div>
            <button
              role="clear-search"
              aria-label="Clear search"
              onClick={() => setSearchQuery("")}
            >
              {closeIcon}
            </button>
          </div>
        )}
        <nav>
          <Suspense fallback={<div>Loading...</div>}>
            <SeriesList series={series as TVMazeApiArrayResponse} />
          </Suspense>
        </nav>
      </div>
    </>
  );
};

export default SearchView;
