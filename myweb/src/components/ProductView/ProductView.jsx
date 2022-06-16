import React from "react";
import "./productView.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Brands from "../Brands/Brands";
import InfoProduct from "../InfoProduct/InfoProduct";
import ViewImagesProduct from "../ViewImagesProduct/ViewImagesProduct";
const ProductView = () => {
  return (
    <div>
      <Header />
      <div className="info-product">
        <ViewImagesProduct />
        <InfoProduct />
      </div>
      <Brands />
      <Footer />
    </div>
  );
};

export default ProductView;
