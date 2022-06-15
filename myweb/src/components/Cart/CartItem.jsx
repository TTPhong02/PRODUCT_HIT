// import React from 'react'
// import PropTypes from 'prop-types'
// import { useEffect } from 'react'
// import { useState } from 'react'
// import {useDispatch} from 'react-redux'
// import { decreaseQuantity, deleteProductCart, increaseQuantity } from '../../redux/action'
// const CartItem = (props) => {
//     const dispatch = useDispatch()
//     const [item,setItem] = useState(props.item);
//     const [quantity,setQuantity] = useState(props.item.quantity);
//     useEffect(()=>{
//         setItem(props.item)
//         setQuantity(props.item.quantity)
//     },[props.item])
//     const updateQuantity = (option) => {
//         if (option === '+' ) {
//             dispatch(increaseQuantity(quantity))
//             // setQuantity(quantity + 1);
//         }
//         if (option === '-') {
//             dispatch(decreaseQuantity(quantity))
//             // setQuantity(quantity - 1 === 0 ? 1 : quantity - 1)
//         }
//     }

//     const removeCartItem = () => {
//         dispatch(deleteProductCart(item))
//         console.log('remove cart');
//     }

//   return (
//     <div className="cart_item">
//             <div className="cart_item_image">
//                 <img src={item.product.src} alt="#" />
//             </div>
//             <div className="cart_item_info">
//                 <div className="cart_item_info_name">
//                     {`${item.product.name} - ${item.color} - ${item.size}`}
//                 </div>
//                 <div className="cart_item_info_name">
//                     {`${item.name}`}
//                 </div>
//                 <div className="cart_item_info_quantity">
//                     <div className="product_info_item_quantity">
//                             <div className="product_info_item_quantity_btn" onClick={() => updateQuantity('-')}>
//                                 <span>-</span>
//                             </div>
//                             <div className="product_info_item_quantity_input">
//                                 {quantity}
//                             </div>
//                             <div className="product_info_item_quantity_btn" onClick={() => updateQuantity('+')}>
//                                 <span>+</span>
//                             </div>
//                     </div>
//                 </div>
//                 <div className="cart_item_info_del" onClick={() => removeCartItem()}>
//                     <i className="bx bx-trash"></i>
//                 </div>
//             </div>
//         </div>
//   )
// }
// CartItem.propTypes = {
//     item: PropTypes.object
// }

// export default CartItem