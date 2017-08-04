import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  render() {
    return (
      <Header
        centerComponent={{ text: '투두 List', style: { color: '#fff', fontSize : 25 } }} 
        rightComponent={{ icon: 'home', color: '#fff' }}
        outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
      />
    );
  }
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
