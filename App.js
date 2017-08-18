import React from 'react';

import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Header } from 'react-native-elements'
import { List } from 'react-native-elements'
import { ListItem } from 'react-native-elements'
import { Button } from 'react-native-elements'
import { CheckBox } from 'react-native-elements'
import {Grid, Col} from 'react-native-elements'



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
    , checked : true
  }, {
    title : 'title4'
    , contents : 'contents '
    , checked : false
  }, {
    title : 'title5'
    , contents : 'contents '
    , checked : true
  }, {
    title : 'title6'
    , contents : 'contents '
    , checked : true
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
                  subtitle={
                    <Grid>
                      <Col size={20}>
                        <CheckBox checked={l.checked} style={{width:50}}/>
                      </Col>
                      <Col size={80}>
                        <Text>{l.contents}</Text>
                      </Col>
                    </Grid>
                  }
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
