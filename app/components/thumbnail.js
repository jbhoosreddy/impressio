import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default class Thumbnail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.thumbnail}>
        <Image
          style={styles.image}
          source={require('../../lib/images/firefox.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  thumbnail: {
    alignItems: 'center',
    marginTop: 20
  },
  image: {
    flex: 1,
    margin: 10,
    maxWidth:400,
    maxHeight: 400
  }
});
