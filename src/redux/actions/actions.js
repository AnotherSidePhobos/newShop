import * as types from './../actions/types';


export const fetchAllProducts = (products) => {
    debugger
    return  {
        type: types.SET_PRODUCTS,
        payload: products
    }

}
export const getTotalCount = (count) => {
    debugger
    return  {
        type: types.GET_TOTAL,
        payload: count
    }

}
export const setCurrentPage = (page) => {
    debugger
    return  {
        type: types.SET_CURRENT_PAGE,
        payload: page
    }

}
export const fetchAllProductsByCat = (products) => {
    debugger
    return  {
        type: types.SET_PRODUCTS_BY_CAT,
        payload: products
    }

}
export const fetchAllProductsById = (product) => {
    debugger
    return{
        type: types.SET_PRODUCTS_BY_ID,
        payload: product
    }
}
export const addProductToCart = (product) => {
    debugger
    return{
        type: types.ADD_PRODUCT_TO_CART,
        payload: product
    }
}
export const deleteProductFromCart = (products) => {
    debugger
    return{
        type: types.DELETE_PRODUCT_TO_CART,
        payload: products
    }
}
export const setAllProducts = (allProducts) => {
    debugger
    return{
        type: types.SET_ALL_PRODUCT,
        payload: allProducts
    }
}

const sortAscending = (products) => {
    products.sort((a, b) => a.price - b.price)
    return products;
}
const sortDescending  = (products) => {
     products.sort((a, b) => b.price - a.price)
    return products;
}

export const getAllByPrice = (products, value) => {


    debugger
    
    
    let temp;
    if (value === 'cheap') {
        temp = sortAscending(products)
    }else if (value === 'expensive'){
        temp = sortDescending(products)
    }
    //let firstSixProducts = temp.slice(0, 6);
    
    return{
        type: types.GET_ALL_WITHOUT_ANY_CONDITION,
        payload: temp
    }
}