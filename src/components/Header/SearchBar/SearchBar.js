import "../../../StyleComponents/SearchBar.css";

function Search() {
  let search = document.getElementById("searchInput").value;

  console.log(search);
}

function SearchBar() {
  return (
    <section id="searchArea">
      <form onSubmit={Search} id="searchBar">
        <input type="text" placeholder="Digite sua pesquisa" id="searchInput" />
        <button type="submit" id="searchBtn">
          <i class="bi bi-search"></i>
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
