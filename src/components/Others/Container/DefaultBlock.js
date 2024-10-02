import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function Container(componenst, { router }) {
  return (
    <>
      <Header />
      <main className="container">{componenst.children}</main>
      <Footer />
    </>
  );
}
