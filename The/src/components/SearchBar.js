import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const SearchBar = () => {
  const { query, setQuery } = useContext(SearchContext);

  return (
    <input
      type="text"
      placeholder="Search transactions..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;