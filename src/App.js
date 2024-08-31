import "./style.css";
import Header from "./components/Header/Header.js";
import SearchBar from "./components/Header/SearchBar/SearchBar.js";
import Footer from "./components/Footer/Footer.js";
import RederPage from "./components/Pages/RederPage.js";

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <RederPage />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
