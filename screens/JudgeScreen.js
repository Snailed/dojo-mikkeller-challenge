import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Font } from 'expo';
import SwipeCards from 'react-native-swipe-cards';

import { MonoText } from '../components/StyledText';
import { BeerCard } from '../components/BeerCard';


export default class JudgeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    fontLoaded: false
  }
  constructor(props) {
    super(props);
    this.state = {
        cards: [
          {name: 'Hippity Hoppity', alcohol: '3.9', flavour: 'Pilsner', image: 'https://cdn.shopify.com/s/files/1/1268/5569/products/chocolate_salty_christmas_1024x1024.jpg?v=1540457579'},
          {name: 'Barley Marley', alcohol: '5.6', flavour: 'Lager', image: 'https://cdn.shopify.com/s/files/1/1268/5569/products/enough_sour_1024x1024.jpg?v=1540457708'},
          {name: 'Soggy boy', alcohol: '2.3', flavour: 'Light Pilsner', image: 'https://cdn.shopify.com/s/files/1/1268/5569/products/blueberry_boyfriend_1024x1024.jpg?v=1540457911'}
      ]
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      'questrial': require('../assets/fonts/Questrial-Regular.ttf')
    });
    this.setState({ fontLoaded: true });
  }

  handleYup() {
    console.log("Yas!");
  }
  handleNope() {
    console.log("No!");
  }

  render() {
    return (
      <View style={styles.container}>
      {
        this.state.fontLoaded ? (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <BeerCard {...cardData} />}
        handleYup={this.handleYup}
        handleNope={this.handleNope}
        style={styles.swipeCards}
        yupText="Yum!"
        nopeText="Nope!"
      />
        ) : null
      }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  swipeCards: {
    flexGrow: 1,
    flexDirection: 'row',
    width: '100%'
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 300,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff'

  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
