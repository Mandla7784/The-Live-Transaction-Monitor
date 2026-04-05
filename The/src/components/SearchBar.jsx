import { useContext } from "react";
import { SearchContext } from  "./SearchProvider";
const SearchBar = () => {
  const { searchTerm: query, setSearchTerm: setQuery } = useContext(SearchContext);

  return (
    <div className="search-bar">
          <input 
      type="text"
      placeholder="Search transactions..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;