import  * as types from "./actionType";

export const getProductStart  = () => ({
    type: types.GET_PRODUCT_START,
});

export const getProductSucces  = (products) => ({
    type: types.GET_PRODUCT_SUCCESS,
    payload:products,
});

export const getProductFail = (error) => ({
    type: types.GET_PRODUCT_FAIL,
    payload: error,

});


//delete product

export const deleteProductStart  = (id) => ({
    type: types.DELETE_PRODUCT_START,
    payload:id
});

export const deleteProductSucces  = () => ({
    type: types.DELETE_PRODUCT_SUCCESS,
});

export const deleteProductFail = (error) => ({
    type: types.DELETE_PRODUCT_FAIL,
    payload: error,

});


//ADD Product

export const addProductStart  = (product) => ({
    type: types.ADD_PRODUCT_START,
    payload:product
});

export const addProductSucces  = () => ({
    type: types.ADD_PRODUCT_SUCCESS,
});

export const addProductFail = (error) => ({
    type: types.ADD_PRODUCT_FAIL,
    payload: error,

});