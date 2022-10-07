import {takeLatest, all, put, fork} from "redux-saga/effects";
import  * as types from "./actionType";
import {firebase} from "../../config/firebase";
import {  getProductFail, getProductSucces, deleteProductSucces, deleteProductFail, addProductSucces, addProductFail} from "./action";

export function* onLoadProductAsync(){
    try {
        const productRef = firebase.firestore().collection('Products');

        const products = yield new Promise((resolve)=>{
           // firebase.firestore().collection('Products').on("value", resolve)
            productRef.orderBy('createdAt', 'desc').onSnapshot(resolve)
        });
        console.log("products",products);

        if(products.val() !== null){
            yield put(getProductSucces(products.val()));
        }else{
            yield put(getProductSucces({}));
        }
    } catch (error) {
        yield put(getProductFail());
    }
}


export function* onDeleteProductAsync({payload: id}){
    try {
        //console.log("payload",payload);
         yield new firebase.firestore(`Products/${id}`).delete();
         yield put(deleteProductSucces());
    } catch (error) {
        yield put(deleteProductFail());
    }
}

export function* onAddProductAsync({payload: product}){
    try {
        const productRef = firebase.firestore().collection('Products');
        yield new productRef.add(product);
         yield put(addProductSucces());
    } catch (error) {
        yield put(addProductFail());
    }
}

export function* onLoadProducts(){
    yield takeLatest(types.GET_PRODUCT_START, onLoadProductAsync);
}

export function* onDeleteProduct(){
    yield takeLatest(types.DELETE_PRODUCT_START, onDeleteProductAsync);
}

export function* onAddProduct(){
    yield takeLatest(types.ADD_PRODUCT_START, onAddProductAsync);
}

const productSagas = [ fork(onLoadProducts),  fork(onAddProduct),fork(onAddProduct)];

export default function* rootSaga(){
    yield all([...productSagas])
}
 