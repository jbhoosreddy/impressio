import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Navigator,
  StyleSheet,
  Image
} from 'react-native';

export default class Activities extends Component {
  static get defaultProps() {
    return {
      title: 'MyScene'
    };
  }

  constructor(props) {
    super(props);

    this.addImage = this.addImage.bind(this);

    this.state = {
      caption: '',
      tags: ''
    }
  }

  addImage() {
    console.log('add image onclick');
  }

  render() {
    const { caption, tags } = this.state;
    return (
      <View style={styles.tabContent}>
        <Text style={styles.label}>{this.props.title}</Text>

        <TouchableOpacity style={styles.buttonWrapper} onPress={() => this.addImage()}>
          <Text>Add Image</Text>
        </TouchableOpacity>

        <Image
          style={styles.image}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />

        <Text style={styles.label}>Caption</Text>
        <TextInput
          style={styles.input}
          onChangeText={(caption) => this.setState({ caption })}
          value={caption}
        />

        <Text style={styles.label}>Tags (Seperated by commas)</Text>
        <TextInput
          style={styles.input}
          onChangeText={(tags) => this.setState({ tags })}
          value={tags}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  tabContent: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'column'
  },
  label: {
    marginTop: 20,
    fontSize: 20
  },
  input: {
    marginTop: 20,
    fontSize: 20,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
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
  image: {
    width: 200,
    height: 200,
    marginTop: 20
  }
});