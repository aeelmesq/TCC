import "../../../StyleComponents/SearchBar.css";
import { useState } from "react";

function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <section id="searchArea">
      <form id="searchBar">
        <input
          type="text"
          placeholder="Digite sua pesquisa"
          id="searchInput"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" id="searchBtn">
          <i className="bi bi-search"></i>
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
