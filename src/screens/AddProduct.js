import { StyleSheet, Text, View,Keyboard } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Input, Button } from 'react-native-elements';
import React,{useState} from 'react';
import {firebase} from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from "react-redux";
import {addProductStart} from "../redux/action";

export default function AddProduct() {
  const navigation = useNavigation();

    const [addProduct,setAddProduct] = useState('');
    const [price,setPrice] = useState('');
    const [offerPrice,setOfferPrice] = useState('');

    let dispatch = useDispatch();

    const productRef = firebase.firestore().collection('Products');

    const aProduct = () => {

      if(addProduct && addProduct.length > 0 || price && price.length > 0 || offerPrice && offerPrice.length > 0 ){
        const timestamp  = firebase.firestore.FieldValue.serverTimestamp();
        const data = {
          heading: addProduct,
          price:price,
          offPrice: offerPrice,
          createdAt: timestamp
        };
        
        dispatch(addProductStart(data))

        // productRef.add(data).then(()=>{
        //   setAddProduct('');
        //   Keyboard.dismiss();
        //   setAddProduct("")
        //   setPrice("")
        //   setOfferPrice("")
        //   navigation.navigate('Home')
        // }).catch((er) =>{
        //   alert(er)
        // })
      }
     
    }

  return (
    <View style={styles.container}>
    <Input
    placeholder='Add Product'
    containerStyle={{marginTop: 10}}
    value={addProduct}
    onChangeText={(heading) => setAddProduct(heading)}
      />
      <Input
      placeholder='Price'
      containerStyle={{marginTop: 10}}
      value={price}
      onChangeText={(text) => setPrice(text)}
        />
        <Input
        placeholder='Offer Price'
        containerStyle={{marginTop: 10}}
        value={offerPrice}
        onChangeText={(text) => setOfferPrice(text)}
          />
          <Button title="Submit" buttonStyle={{marginTop:10}} onPress={aProduct}  />

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