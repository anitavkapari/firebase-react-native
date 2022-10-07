import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'
import Product from '../component/Product';
import { firebase } from '../../config/firebase';
import { useSelector, useDispatch } from "react-redux";
import { getProductStart, deleteProductStart } from "../redux/action"

export default function ViewProduct() {
  const [productList, setProductList] = useState([])

  const productRef = firebase.firestore().collection('Products');
//const { products: data} = useSelector((state) => state.data);
//const state = useSelector((state) => state.data);
//console.log("data",data);


let dispatch = useDispatch();

  useEffect(() => {
   // dispatch(getProductStart());
   //setProductList(data)
    productRef.orderBy('createdAt', 'desc').onSnapshot(querySnapshot => {
      const productList = []
      querySnapshot.forEach((doc) => {
        const { heading, offPrice, price } = doc.data()
        productList.push({
          id: doc.id,
          heading,
          price,
          offPrice
        })
      })
      setProductList(productList)
    }
    )
  }, [])
  const deleteProduct = (productList) => {
    // productRef.doc(productList.id).delete().then(() => {
    //   alert("Deleted Product")
    // })
    //   .catch(error => {
    //     alert(error)
    //   })

    dispatch(deleteProductStart(productList.id));
    dispatch(deleteProductStart());
  }

  //productList.length != 0 ? productList.map((data, index)
  return (
    <View style={styles.container}>
      {
        productList.length != 0 ?  productList.map((data, index)=> {
          return (
            <View key={index} style={{ margin: 5 }}>
              <Product item={data} onDelete={deleteProduct} />
            </View>
          )
        })
       :
       <Text>Please wait Data is Loading.....</Text>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
});