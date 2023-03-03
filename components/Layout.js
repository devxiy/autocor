import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout({ children, selected }) {
  return (
    <>
      <Header selected={selected} />
      {children}
      <Footer />
    </>
  );
}
