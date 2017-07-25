import React, { Component } from 'react';
import {
  AppRegistry,
  TabBarIOS,
  NavigatorIOS,
  FlatList,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

import GroceriesListView from './components/GroceriesListView';
import ShoppingCartView from './components/ShoppingCartView';

export default class GroceryStore extends Component {

  constructor(props) {
    super(props);
    this.state =  {
      selectedTab: 'List'
    };
  }

  render() {
    return (

      <TabBarIOS
         unselectedTintColor="#231f20"
         tintColor="#231f20"
         barTintColor="#f9f9f9">
         <TabBarIOS.Item
           title=""
           icon={require('./images/icon-list-1x.png')}
           selectedIcon={require('./images/icon-list-1x.png')}
           renderAsOriginal
           selected={this.state.selectedTab === 'List'}
           onPress={() => {
             this.setState({ selectedTab: 'List' });
           }}
          >
          <NavigatorIOS
            initialRoute={{
              component: GroceriesListView,
              tintColor: "#231f20",
              barTintColor: '#f9f9f9',
              title: 'Groceries',
              leftButtonIcon: require('./images/icon-settings-1x.png'),
              rightButtonIcon: require('./images/icon-add-1x.png')
            }}
            style={{flex: 1}}
          />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title=""
          icon={require('./images/icon-cart-1x.png')}
          selectedIcon={require('./images/icon-cart-1x.png')}
          renderAsOriginal
          selected={this.state.selectedTab === 'Cart'}
          onPress={() => {
            this.setState({ selectedTab: 'Cart' });
          }}
         >
         <NavigatorIOS
           initialRoute={{
             component: ShoppingCartView,
             tintColor: "#231f20",
             barTintColor: '#f9f9f9',
             title: 'ShoppingCart',
             leftButtonIcon: require('./images/icon-settings-1x.png'),
             rightButtonIcon: require('./images/icon-add-1x.png')
           }}
           style={{flex: 1}}
         />
       </TabBarIOS.Item>
      </TabBarIOS>

    );
  }
}

AppRegistry.registerComponent('GroceryStore', () => GroceryStore);
