import React, { Component } from 'react';
import Counter from '../components/counter';
import Thumbnail from '../components/thumbnail';
import {
  View,
  Text,
  Navigator,
  StyleSheet
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
        <View>
          <Thumbnail />
        </View>
        <View>
          <View>
            <Text>Thumbs Up</Text>
          </View>
          <View>
            <Text>Thumbs Down</Text>
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  app: {
    flexDirection: 'column'
  }
});

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Home);