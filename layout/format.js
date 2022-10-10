import Header from "../components/header";
import Footer from "../components/footer";

export default function Format({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
