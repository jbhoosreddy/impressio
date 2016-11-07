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
const Platform = require('react-native').Platform;
const ImagePicker = require('react-native-image-picker');

import {bindActionCreators} from 'redux';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

class Activities extends Component {
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

  componentWillUpdate(nextProps, nextState) {
    if (nextState.avatarSource && !this.state.avatarSource || this.state.avatarSource.uri !== nextState.avatarSource.uri) {
      this.props.actions.uploadImage(nextState.avatarSource.uri);
    }
  }

  addImage() {
    var options = {
      title: 'Select Avatar',
      customButtons: [
        {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info below in README)
     */
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        // You can display the image using either data...
        const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};

        // or a reference to the platform specific asset location
        if (Platform.OS === 'ios') {
          const source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          const source = {uri: response.uri, isStatic: true};
        }

        this.setState({
          avatarSource: source
        });
      }
    });
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
        
        <Image source={this.state.avatarSource} style={styles.image} />

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

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Activities);

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