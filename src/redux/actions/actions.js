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