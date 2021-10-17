import * as types from './../actions/types';

let initialState = {
    cartITems: []
}

const IsExistInCart = (itemsInCart, item) => {
    const existingCartItem = itemsInCart.find(
        itemsInCart => itemsInCart.id === item.id
    );
    if (existingCartItem) {
        return itemsInCart.map(itemsInCart => 
            itemsInCart.id === item.id
            ? { ...itemsInCart, count: itemsInCart.count + 1}
            : itemsInCart
        );
      }

      return[
          ...itemsInCart,
          {
              ...item,
              count: 1
          }
      ];
} 


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_PRODUCT_TO_CART:
            debugger
            return{
                ...state,
                cartITems: IsExistInCart(state.cartITems, action.payload)
            }
        case types.DELETE_PRODUCT_TO_CART:
            return{
                ...state,
                cartITems: action.payload
            }
    
        default:
            return state;
    }
}
export default cartReducer;