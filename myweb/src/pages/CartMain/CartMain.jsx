import React from 'react'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import CartItem from '../../components/Cart/CartItem';
import productData from '../../assets/fakedata/product';
import { ProductInCart } from '../../components/ProductInCart/Index';
import { ProducInMainCart } from '../../components/ProductInCart/ProducInMainCart';
import './CartMain.scss';
import { Link } from 'react-router-dom';
export const CartMain = () => {
    const product = productData.getAllProducts()
    // const cartItems = useSelector(state => state.cartItems.value) 
    // console.log(cartItems);

    // const [ cartProducts, setCartProducts ] = useState([])

    // const [totalProducts, setTotalProducts] = useState(0)

    // const [ totalPrice, setTotalPrice ] = useState(0) 

    // useEffect(() => {
    //     setCartProducts(productData.getCartItemsInfo(cartItems))

    //     setTotalPrice(cartItems.reduce((total, item) => total + (Number(item.quantity) * (Number(item.price))), 0))

    //     setTotalProducts(cartItems.reduce((total, item) => total + (Number(item.quantity)), 0))

    // }, [cartItems])
  return (
    <div className="cartmain grid grid-cols-12">
        <div className="cartmain_title col-span-12">
            <h1>GIỎ HÀNG</h1>
        </div>
        <div className="cartmain_product col-span-7">
            <div className="cartmain_product_title grid grid-cols-12 ">
                <h2 className=' col-span-6 mr-1'>Sản Phẩm</h2>
                <h2 className=' col-span-2 mr-1'>Giá</h2>
                <h2 className='col-span-2 mr-2'>Số Lượng</h2>
                <h2 className='col-span-2 mr-1'>Tổng</h2>
            </div>
            {
                product.map( (item,index) =>(
                    <ProducInMainCart 
                    item={item}
                    key = {index}
                    />
                ))
                
            }
        </div>
        <div className="cartmain_bill col-span-5">
            <div className="cartmain_bill_title">
                <h2>Cộng Giỏ Hàng</h2>
            </div>
            <div className="cartmain_bill_infor">
                <div className="cartmain_bill_infor_temp ">
                    <h3>Tạm Tính</h3>
                    <p>999999đ</p>
                </div>
                <div className="cartmain_bill_infor_sum">
                    <h3>Tổng</h3>
                    <p>999999đ</p>
                </div>
                <div className="cartmain_bill_infor_sale">
                    <h3>Ưu Đãi</h3>
                    <p>-5%</p>
                </div>
            </div>
            <div className="cartmain_bill_voucher">
                <i class="fa-solid fa-ticket"></i>
                Voucher Ưu Đãi
            </div>
            {/* <div className="cartmain_bill_pay">
                <Link to={"/"}>
                    TIẾN HÀNH THANH TOÁN
                </Link>
            </div> */}
            <Link to={'/cart'} className='cartmain_bill_pay'>
                <button className='cartmain_bill_pay_btn'>
                    TIẾN HÀNH THANH TOÁN
                </button>
                
            </Link>
        </div>
    </div>
  )
}
