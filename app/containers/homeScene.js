import React, { Component } from 'react';
import Counter from '../components/counter';
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
      <Counter
        counter={state.count}
        {...actions} />
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

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Home);