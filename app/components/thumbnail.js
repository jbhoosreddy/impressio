import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Image
        style={styles.image}
        source={require('../../lib/images/firefox.jpg')}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    maxWidth:400,
    maxHeight: 400
  }
});
