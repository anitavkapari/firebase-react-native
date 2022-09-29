import { StyleSheet, Text, View } from 'react-native';
import { useAuthentication } from '../utils/hooks/useAuthentication';
import { Button } from 'react-native-elements';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

export default function HomeScreen({ navigation}) {
  const { user } = useAuthentication();
  return (
    <View style={styles.container}>
      <Text>Welcome {user?.email}!</Text>
      <Button title="Sign Out" style={{marginTop:10}} onPress={() => signOut(auth)} />
      <Button title="Add Product" style={{marginTop:10}} onPress={() => navigation.navigate('Add Product')} />
      <Button title="View Product" style={{marginTop:10}} onPress={() => navigation.navigate('Product')} />
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