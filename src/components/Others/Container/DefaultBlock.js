import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import SearchBar from "../../Header/SearchBar/SearchBar";
import AsideBar from "../../AsideBar/AsideBar";

export default function Container(componenst) {
  return (
    <>
      <Header />
      <AsideBar />
      <SearchBar />
      <main className="container">{componenst.children}</main>
      <Footer />
    </>
  );
}
