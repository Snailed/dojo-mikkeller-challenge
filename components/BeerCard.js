import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export class BeerCard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{flex: 1, bottom: 50}}
          source={{uri: this.props.image}}
        />
        <Text style={styles.text}>{this.props.name}</Text>
        <Text style={styles.text, styles.littleText}>{this.props.flavour}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 300,
    height: 500,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
    	width: 0,
    	height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    backgroundColor: '#fff'
  },
  text: {
    textAlign: 'left',
    marginBottom: 5,
    marginLeft: 20,
    fontSize: 36,
    paddingRight: 20,
    fontFamily: 'questrial',
    textDecorationLine: 'underline',
    backgroundColor: 'white'
  },
  littleText: {
    fontSize: 26,
    marginBottom: 10,
    marginLeft: 20
  }
});
