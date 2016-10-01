import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Navigator,
  StyleSheet
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
  },
  label: {
    marginTop: 20,
    fontSize: 20
  },
  input: {
    marginTop: 20,
    fontSize: 45,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  buttonWrapper: {
    backgroundColor: '#03C799',
    height: 46,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    padding: 20,
    overflow: 'hidden',
  }
});