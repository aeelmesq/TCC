import Header from "../../Header/Header";
import SearchBar from "../../Header/SearchBar/SearchBar";
import AsideBar from "../../AsideBar/AsideBar";
import FooterTemplate from "../../Footer/footerTemplate";

export default function Container({ children }) {
  return (
    <>
      <Header />
      <AsideBar />
      <SearchBar />
      <main className="container">{children}</main>
      <FooterTemplate />
    </>
  );
}
