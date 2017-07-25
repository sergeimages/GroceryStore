import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ShoppingCartView extends React.Component {
  render() {
    return (

      <View style={styles.shoppingCartContainer}>
        <Text style={styles.shoppingCartText}>
          This screen diplays items that were added to shopping cart
        </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  shoppingCartContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60
  },
  shoppingCartText: {
    fontSize: 20,
    textAlign: 'center'
  }
});
