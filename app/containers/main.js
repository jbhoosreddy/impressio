'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import Home from './homeScene';
import Activities from './activitiesScene';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import {
  TabBarIOS,
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';

// @connect(state => ({
//   state: state.counter
// }))
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tabOne'
    };
  }

  setTab(tabId) {
    this.setState({selectedTab: tabId});
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          systemIcon="search"
          selected={this.state.selectedTab === 'tabOne'}
          onPress={() => this.setTab('tabOne')}>
          <Navigator
            initialRoute={{ title: 'GG nore', index: 0 }}
            renderScene={(route, navigator) => {
              return <Home title={route.title} />
            }} />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          selected={this.state.selectedTab === 'tabTwo'}
          onPress={() => this.setTab('tabTwo')}>
          <Navigator
            initialRoute={{ title: 'GG nore', index: 0 }}
            renderScene={(route, navigator) => {
              return <Activities title={route.title} />
            }} />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center'
  },
  tabText: {
    margin: 50,
    fontSize: 45
  }
});

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Main);
