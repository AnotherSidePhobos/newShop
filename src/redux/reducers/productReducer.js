import * as types from './../actions/types';

const initialState = {
    productsCount: 0,
    productsArr: [],
    allProductsArr: [],
    product: {},
    currentPage: 1,
    pageSize: 6,
    totalItemsCount: 0
}

const productReducer = (state = initialState, action) => {
    debugger
    let temp = action.payload;

    switch (action.type) {
        case types.SET_PRODUCTS:
            return{
                ...state,
                productsArr: action.payload
            }
        case types.GET_TOTAL:
            return{
                ...state,
                totalItemsCount: action.payload
            }
        case types.SET_CURRENT_PAGE:
            return{
                ...state,
                currentPage: action.payload
            }
        case types.SET_PRODUCTS_BY_CAT:
            return{
                ...state,
                productsArr: action.payload
            }
        case types.SET_PRODUCTS_BY_ID:
            debugger
            return{
                ...state,
                product: action.payload
            }
        case types.GET_ALL_WITHOUT_ANY_CONDITION:
            debugger
            return{
                ...state,
                productsArr: action.payload
            }
        case types.SET_ALL_PRODUCT:
            debugger
            return{
                ...state,
                allProductsArr: action.payload
            }
        

        default:
            return state;
    }
}

export default productReducer;