import React, { Component } from 'react';
import Counter from '../components/counter';
import Thumbnail from '../components/thumbnail';
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import {bindActionCreators} from 'redux';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

class Home extends Component {
  static get defaultProps() {
    return { title: 'MyScene' };
  }

  render() {
    const { actions, state } = this.props;

    return (
      <View style={styles.app}>
        <Thumbnail />
        <View style={styles.rating}>
          <TouchableOpacity style={styles.buttonWrapper}>
            <Text>Thumbs UP</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.buttonWrapper}>
            <Text>Thumbs DOWN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  app: {
    flexDirection: 'column',
    marginTop: 20
  },
  thumbnail: {
    flex: 1
  },
  rating: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  buttonWrapper: {
    backgroundColor: '#03C799',
    height: 46,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    padding: 20,
    overflow: 'hidden',
  },
});

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Home);