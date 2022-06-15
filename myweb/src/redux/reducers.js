// import {combineReducers} from 'redux'
// const initProduct ={
//     numberCart : 0,
//     Cart:[],
//     product:[]
// }

// const todoProduct = (state = initProduct, action) =>{
//     switch(action.type){
//         case 'getAllProduct' :{
//             return {
//                 ...state,
//                 product:action.payload
//             }
             
//         }
//         case 'getNumberCart' :{
//             return [...state]
//         }
//         case 'addProductCart' :
//             if(state.numberCart == 0){
//                 let cart = {
//                     id:action.payload.id,
//                     quantity : 1,
//                     name : action.payload.name,
//                     price : action.payload.price,
//                     image : action.payload.src,
//                     size : action.payload.size,
//                     color: action.payload.color
//                 }
//                 state.Cart.push(cart);
//             }
//             else {
//                 let check = false;
//                 state.Cart.map((item,key) =>{
//                     if(item.id == action.payload.id){
//                         state.Cart[key].quantity++;
//                         check = true;
//                     }
//                 })
//                 if(!check){
//                     let cartCheck = {
//                         id: action.payload.id,
//                         quantity :1 ,
//                         name : action.payload.name,
//                         price : action.payload.price,
//                         image : action.payload.src,
//                         size : action.payload.size,
//                         color: action.payload.color
//                     }
//                     state.Cart.push(cartCheck);
//                 }
//             }
//             return{
//                 ...state,
//                 numberCart: state.numberCart+ 1
//             }
//         case 'deleteProductCart' :
//             let quantity_ = state.Cart[action.payload].quantity;
//             return {
//                 ...state,
//                 numberCart : state.numberCart - quantity_,
//                 Cart:state.Cart.filter(item =>{
//                     return item.id !=state.Cart[action.payload].id
//                 })
//             }
//         case 'increaseQuantity' :
//             state.numberCart++;
//             state.Cart[action.payload].quantity++;
//             return [...state]
//         case 'decreaseQuantity' : 
//             let quantity = state.Cart[action.payload].quantity;
//             if(quantity >1 ){
//                 state.numberCart--;
//                 state.Cart[action.payload].quantity--;
    
//             }
//             return [...state]
//         default : 
//             return state;
//     }            
// }
// const ShopApp = combineReducers({
//     _todoProduct : todoProduct
// })
// export default ShopApp

