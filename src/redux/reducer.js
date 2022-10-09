import * as types from "./actionType";

const initialState = {
    products: {},
    error: null,
    loading: false,
};
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT_START:
        case types.DELETE_PRODUCT_START:
        case types.ADD_PRODUCT_START:
        case types.UPDATE_PRODUCT_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            };
        case types.DELETE_PRODUCT_SUCCESS:
        case types.UPDATE_PRODUCT_SUCCESS:
        case types.ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case types.GET_PRODUCT_FAIL:
        case types.DELETE_PRODUCT_FAIL:
        case types.ADD_PRODUCT_FAIL:
        case types.UPDATE_PRODUCT_FAIL:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};

export default productReducer;