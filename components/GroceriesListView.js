import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class GroceriesListView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let groceriesData = [
      {key: 1, name: "Milk 1l",                state: "home"},
      {key: 2, name: "Eggs Medium 12 pack",    state: "cart"},
      {key: 3, name: "Fresh Basil",            state: "home"},
      {key: 4, name: "Wholegrain Bread 1 pkg", state: "cart"},
      {key: 5, name: "Ground Coffee 200g",     state: "cart"},
      {key: 6, name: "Red Wine",               state: "home"},
      {key: 7, name: "Mozzarella Cheese 500g", state: "home"},
      {key: 8, name: "Orange Juice 1l ",       state: "cart"},
      {key: 9, name: "Tomatoes",               state: "home"}
    ];
    return (

      <FlatList
        data={groceriesData}
        renderItem = {
          ({item}) =>
          <View style={styles.container}>
            <View style={styles.row}>

              <Text style={styles.text}>{item.name}</Text>
              <View style={styles.iconContainer}>
                <Image
                  style={styles.icon}
                  source={require('./../images/icon-home.png')}
                />
              </View>
            </View>
            <View style={styles.separator}/>
          </View>
        }
      >
      </FlatList>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: '#e6e7e8',
    borderLeftWidth: 3,
    borderColor: '#dddedf',
    padding: 19,
    marginRight: 0
  },
  icon: {
    width: 23,
    height: 23,
  },
  text: {
    fontSize: 20,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 25
  },
  separator: {
    height: 1,
    backgroundColor: '#d5d6d6'
  }
});
