import { StyleSheet, Text, View } from 'react-native';
import React,{useState,useEffect} from 'react'
import Product from '../component/Product';
import {firebase} from '../../config/firebase';


export default function ViewProduct() {
  const [productList, setProductList] = useState([])

  const productRef = firebase.firestore().collection('Products');

  useEffect(()=>{
    productRef.orderBy('createdAt','desc').onSnapshot(querySnapshot => {
      const productList =  []
      querySnapshot.forEach((doc)=>{
        const{heading,offPrice,price} = doc.data()
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
  },[])

  const deleteProduct = (productList) => {
    productRef.doc(productList.id).delete().then(()=>{
      alert("Deleted Product")
    })
    .catch(error => {
      alert(error)
    })
  }

  return (
    <View style={styles.container}>
    {
      productList.map((data,index)=>{
         return (
             <View key={index} style={{ margin:5}}>
             <Product item={data} onDelete={deleteProduct}/>
             </View>
         )
     })
 }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: "white",
        padding:10,
  },
});