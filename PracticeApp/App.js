import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import CenterWidget from './components/center';
import Footer from './components/footer';
export default function App() {
  return (
    <>
    <View style={styles.container}>
      <Header style={{
      }}>
      </Header>
      <Text
        style={{fontSize: 20}}>
        Open up App.js to  working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    <View
    style={{
      alignContent:'end' 
    }}>
      <CenterWidget
      style={{
        justifyContent:'center'
      }}
      ></CenterWidget>
      <Footer
      ></Footer>
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 100,
    backgroundColor: '#fff',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
});
