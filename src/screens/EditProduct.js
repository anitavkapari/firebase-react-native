import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button ,Input} from 'react-native-elements';
import React,{useState,useEffect} from 'react';
import {firebase} from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import {updateProductStart} from "../redux/action";
import {  useDispatch } from "react-redux";

export default function EditProduct(items) {
  const navigation = useNavigation();

    const [product,onChangeProduct] = useState(items.route.params.item.heading);
    const [price,onChangePrice] = useState(items.route.params.item.price);
    const [offerPrice,onChangeOffPrice] = useState(items.route.params.item.offPrice);
    
    const productRef = firebase.firestore().collection('Products');

  
    let dispatch = useDispatch();

const updateProduct = ()=>{

  if(product && product.length > 0 || price && price.lengthn > 0 || offerPrice && offerPrice.length > 0){
    const data = {
      heading:product,
      price:price,
      offPrice:offerPrice,
    };
    dispatch(updateProductStart(data))
    navigation.navigate('Home')
    // productRef.doc(items.route.params.item.id).update(data)
    // .then(()=>{
    //   alert("Updated"),
    //   navigation.navigate('Home')
    // })
    // .catch((error)=>{
    //   alert(error.message)
    // })
  }
}

  return (
    <View style={styles.container}>
    <Input
    placeholder='Add Product'
    containerStyle={{marginTop: 10}}
    value={product}
    onChangeText={onChangeProduct}
      />
      <Input
      placeholder='Price'
      containerStyle={{marginTop: 10}}
      value={price}
      onChangeText={onChangePrice}
      />
        <Input
        placeholder='Offer Price'
        containerStyle={{marginTop: 10}}
        value={offerPrice}
        onChangeText={onChangeOffPrice}
        />
          <Button title="Update" buttonStyle={{marginTop:10}} onPress={updateProduct}/>

    </View>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});