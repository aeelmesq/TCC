import './style.css';
import logo from './logo.svg';
import Header from './components/Header/Header.js';
import SearchBar from './components/Header/SearchBar/SearchBar.js';
import Footer from './components/Footer/Footer.js';

function App() {
  return (
    <>
      <Header />
      <SearchBar />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
