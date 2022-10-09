import { takeLatest, all, put, fork } from "redux-saga/effects";
import * as types from "./actionType";
import { firebase } from "../../config/firebase";
import { getProductFail, getProductSucces, deleteProductSucces, deleteProductFail, addProductSucces, addProductFail, updateProductFail, updateProductSucces } from "./action";

const productRef = firebase.firestore().collection('Products');

export function* onLoadProductAsync() {
    try {

        const products = yield new Promise((resolve) => {
            // firebase.firestore().collection('Products').on("value", resolve)
            productRef.orderBy('createdAt', 'desc').onSnapshot(resolve)
        });
        console.log("products", products);
        if (products.val() !== null) {
            yield put(getProductSucces(products.val()));
        } else {
            yield put(getProductSucces({}));
        }
    } catch (error) {
        yield put(getProductFail());
    }
}


export function* onDeleteProductAsync({ payload: id }) {
    try {
        //console.log("payload",payload);
        yield new productRef.doc(id).delete();
        yield put(deleteProductSucces());
    } catch (error) {
        yield put(deleteProductFail());
    }
}

export function* onUpdateProductAsync({ payload: { id, initialState: product } }) {
    try {
        // console.log("payload",payload);

        yield new productRef.doc(id).update(product)
        yield put(updateProductSucces());
    } catch (error) {
        yield put(updateProductFail());
    }
}

export function* onAddProductAsync({ payload: product }) {
    try {
        yield new productRef.add(product);
        yield put(addProductSucces());
    } catch (error) {
        yield put(addProductFail());
    }
}

export function* onLoadProducts() {
    yield takeLatest(types.GET_PRODUCT_START, onLoadProductAsync);
}

export function* onDeleteProduct() {
    yield takeLatest(types.DELETE_PRODUCT_START, onDeleteProductAsync);
}

export function* onUpdateProduct() {
    yield takeLatest(types.UPDATE_PRODUCT_START, onUpdateProductAsync);
}

export function* onAddProduct() {
    yield takeLatest(types.ADD_PRODUCT_START, onAddProductAsync);
}

const productSagas = [fork(onLoadProducts), fork(onAddProduct), fork(onAddProduct), fork(onUpdateProduct)];

export default function* rootSaga() {
    yield all([...productSagas])
}
