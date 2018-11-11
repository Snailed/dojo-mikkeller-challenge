import React from 'react';
import { Platform, Text, ScrollView, StyleSheet, Image, View, TextInput, Slider } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { DescriptionContainer } from '../components/DescriptionContainer';

export default class CreateScreen extends React.Component {
  static navigationOptions = {
    title: 'Create',
  };

  constructor(props) {
    super(props);
    this.state = {
      text: 'Name...',
      alco: 0
    };
  }
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
        <Image
          style={{flex: 1, height: undefined, width: undefined}}
          resizeMode="contain"
          source={{uri: 'https://www.fotoagent.dk/single_picture/12313/138/mega/copy_from_29369_to_29369_Mikkeller_Help.JPG'}}
        />
        </View>

        <TextInput
        style={{height: 60, textAlign: 'center', borderBottomColor: 'gray', borderBottomWidth: Platform.OS === 'ios' ? 1 : 0, width: '80%', alignSelf: 'center', fontSize: 36}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
        <View style={styles.alcoSlider} >
          <Text style={styles.alcoContentText}>{this.state.alco} %</Text>
          <Slider style={styles.alcoContentSlider} minimumValue={0} maximumValue={20} step={1} onValueChange={(value) => {this.setState({alco: value}) }}/>
        </View>
      <DescriptionContainer />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  imageContainer: {
    flex: 1,
    height: 300
  },
  alcoContentText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50
  },
  alcoSlider: {
    width: '80%',
    alignSelf: 'center'
  }
});
