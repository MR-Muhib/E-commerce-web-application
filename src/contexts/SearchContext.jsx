import PropTypes from "prop-types";
import { createContext, useEffect, useState, useCallback } from "react";

const SearchContext = createContext();

const SearchProvider = ({ children, data, loading, error }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data || []);

  const handleSearch = useCallback(
    (searchValue) => {
      const value = searchValue.toLowerCase();

      const filtered = data.filter((item) => {
        const itemName = item.name.toLowerCase();
        return itemName.startsWith(value);
      });
      setFilteredData(filtered);
    },
    [data]
  );

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    } else {
      setFilteredData(data || []);
    }
  }, [searchQuery, data, handleSearch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data.</div>;

  return (
    <SearchContext.Provider value={{ handleChange, searchQuery, filteredData }}>
      {children}
    </SearchContext.Provider>
  );
};

// prop-types
SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export { SearchContext, SearchProvider };
