import  * as types from "./actionType";

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

//View Product
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


//Update product

export const updateProductStart  = (data) => ({
    type: types.UPDATE_PRODUCT_START,
    payload:data
});

export const updateProductSucces  = () => ({
    type: types.UPDATE_PRODUCT_SUCCESS,
});

export const updateProductFail = (error) => ({
    type: types.UPDATE_PRODUCT_FAIL,
    payload: error,

});

