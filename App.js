import React from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Header } from 'react-native-elements';
import { List } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import { Button } from 'react-native-elements'

export default class App extends React.Component {
  render() {

const list = [
  {
    title : 'title1'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title2'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title3'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title4'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title5'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title6'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title7'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title8'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title9'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title10'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title11'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title12'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title13'
    , contents : 'contents '
    , checked : false
  }
];

    return (
      <View>
        <Header style={{height:50, backgroundColor: '#3D6DCC'}}
          centerComponent={{ text: '투두 List', style: { color: '#fff', fontSize : 25 } }} 
          rightComponent={<Button title='Add' onPress={()=>alert('asd')}/>}
        />
        <ScrollView>
          <List containerStyle={{marginBottom: 20}}>
            {
              list.map((l, i) => (
                <ListItem
                  key={i}
                  title={l.title}
                  onPress={()=>alert(l.title)}
                />
              ))
            }
          </List>
        </ScrollView>
      </View>
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
