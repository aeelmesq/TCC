import '../../../StyleComponenst/SearchBar.css';

function Search() {
  let search = document.getElementById('searchInput').value;

  console.log(search);
}

function SearchBar() {
  return (
    <section id="searchArea">
      <form onSubmit={Search} id="searchBar">
        <input type="text" placeholder="Digite sua pesquisa" id="searchInput" />
        <button type="submit" id="searchBtn">
          <img src="./pesquisa.png" alt="pesq" width="20px" />
        </button>
      </form>
    </section>
  );
}

export default SearchBar;
