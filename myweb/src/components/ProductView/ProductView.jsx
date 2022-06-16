import React from "react";
import "./productView.scss";
import Brands from "../Brands/Brands";
import InfoProduct from "../InfoProduct/InfoProduct";
import ViewImagesProduct from "../ViewImagesProduct/ViewImagesProduct";
const ProductView = () => {
  return (
    <div>
      <div className="info-product">
        <ViewImagesProduct />
        <InfoProduct />
      </div>
      <Brands />
    </div>
  );
};

export default ProductView;
