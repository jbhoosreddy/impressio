import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator,
  StyleSheet
} from 'react-native';

export default class Activities extends Component {
  static get defaultProps() {
    return { title: 'MyScene' };
  }

  render() {
    return (
      <View style={styles.tabContent}>
        <Text style={styles.tabText}>Jaideeeep {this.props.title}</Text>
      </View>
    );
  }
};

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