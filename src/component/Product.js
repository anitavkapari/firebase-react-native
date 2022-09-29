import { StyleSheet, Image, Text, View,TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-elements';

const Product = ({item, onDelete}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <Button title="Delete Product" buttonStyle={{marginTop:10}} onPress={onDelete}  />
      <View style={styles.card}>
      <Image source={require('../../assets/images/apple.png')} />
        <View style={styles.cardItems}>
        <View style={styles.cardRateItem}>
         <Text>Product Name: {item.heading}</Text>
         <View style={{width:'35%'}}></View>  
         <Button title="Edit Product" buttonStyle={{marginTop:10}} onPress={()=>navigation.navigate("EditProduct" , {item: item})}  />
         </View>
          <View style={styles.cardRateItem}>
            <Text style={{marginTop:5,}}>Price : {'\u20B9'}  {item.price}</Text>
            <View style={{width:'35%'}}></View>  
            <Text style={{marginTop:5,}}>Offer Price : {'\u20B9'} {item.offPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    //padding:10,
  },
  card: {
    width: '100%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    flexDirection:'row',
  },
  cardItems: {
    flexDirection: "column",
    padding:10,
    width: "75%"
  },
  cardRateItem:{
    flexDirection: "row",
    marginTop:10,
  }
});
