import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import BtnScrollUp from "../BtnScrollUp/BtnScrollUp";

export default function Container(componenst, { router }) {
  return (
    <>
      <Header />
      <BtnScrollUp />
      <main className="container">{componenst.children}</main>
      <Footer />
    </>
  );
}
