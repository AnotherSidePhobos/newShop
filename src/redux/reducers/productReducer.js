import * as types from './../actions/types';

const initialState = {
    productsArr: [],
    currentPage: 1,
    pageSize: 6,
    totalItemsCount: 0
}

const productReducer = (state = initialState, action) => {
    debugger
    let temp = action.payload;

    switch (action.type) {
        case types.SET_PRODUCTS:
            debugger
            return{
                ...state,
                productsArr: action.payload
            }
        case types.GET_TOTAL:
            debugger
            return{
                ...state,
                totalItemsCount: action.payload
            }
        case types.SET_CURRENT_PAGE:
            debugger
            return{
                ...state,
                currentPage: action.payload
            }
        

        default:
            return state;
    }
}

export default productReducer;