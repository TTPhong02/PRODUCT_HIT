import React from "react";
import "./home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SliderBar from "../../components/SlideBar/index";
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Category from "../../components/Category/Category";
import SaleAdv from "../../components/SaleAdv/SaleAdv";
import ProductsHot from "../../components/ProductsHot/ProductsHot";
import ProductsNew from "../../components/ProductsNew/ProductsNew";
import News from "../../components/News/News";
import Brands from "../../components/Brands/Brands";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <SliderBar />
      <Category />
      <ProductsHot />
      <SaleAdv />
      <ProductsNew />
      <News />
      <Brands />
      <Footer />
    </div>
  );
};

export default Home;
