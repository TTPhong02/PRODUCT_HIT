import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { star } from "fontawesome";
import React from "react";
import "./infoProduct.scss";

const InfoProduct = () => {
  const category = "sneaker";
  return (
    <div className="details-product">
      <div className="address-name__category">
        Trang chủ
        <span>/{category}</span>
      </div>
      <h1 className="name-product">
        Giày Thể Thao Nam Biti’s Hunter X Liteknit DSMH02201XNH (Xanh Nhớt)
      </h1>
      <p className="price-product">
        899.000
        <span className="monetary-unit">đ</span>
      </p>
      <div className="rank-product">
        <span className="ranking">
          4.2/5
          <FontAwesomeIcon icon={star} />
        </span>
      </div>

      <div className="select-color">
        <div className="color-product">Màu sắc</div>
        <div className="item-color"> </div>
        <div className="item-color"> </div>
        <div className="item-color"> </div>
        <div className="item-color"> </div>
      </div>

      <div className="select-size">
        <div className="size-product">Size</div>
        <div className="item-size">39</div>
        <div className="item-size">40</div>
        <div className="item-size">41</div>
        <div className="item-size">41</div>
      </div>
    </div>
  );
};

export default InfoProduct;
