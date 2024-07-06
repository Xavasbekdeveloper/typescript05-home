import{ FC } from "react";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";
import Footer from "./component/footer/Footer";
import Product from "./component/products/Product";
import Catalog from "./component/catalog/Catalog";

const App: FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Catalog />
      <Product />
      <Footer />
    </>
  );
};

export default App;
