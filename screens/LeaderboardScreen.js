import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View, Image, StyleSheet, ScrollView, TouchableWithoutFeedback } from 'react-native';


export default class LeaderboardScreen extends React.Component {
  static navigationOptions = {
    title: 'Leaderboards',
  };
  constructor(props) {
    super(props);
    this.state = {
      beers: [
        {
          title: 'Mikkeller, Help!',
          type: 'Pale Ale',
          alco: 5.7,
          img: 'https://www.fotoagent.dk/single_picture/12313/138/mega/copy_from_29369_to_29369_Mikkeller_Help.JPG',
          opened: false
        },
        {
          title: 'Beer Geek Brunch',
          type: 'Imperial Havrestout',
          alco: 4.8,
          img: 'https://www.fotoagent.dk/single_picture/10620/138/mega/Mikkeller_beer_geek_brunch.JPG',
          opened: false
        },
        {
          title: 'Drink in the snow',
          type: 'Winter Ale',
          alco: 0.3,
          img: 'https://www.fotoagent.dk/single_picture/10620/138/mega/Mikkeller_Drinkin_in_the_sno_.jpg',
          opened: false
        },
        {
          title: 'Green Gold',
          type: 'IPA',
          alco: 7.0,
          img: 'https://res.cloudinary.com/ratebeer/image/upload/w_152,h_309,c_pad,d_beer_img_default.png,f_auto/beer_71097',
          opened: false
        },
        {
          title: 'Dankins',
          type: 'New England style IPA',
          alco: 6.8,
          img: 'https://www.bestofbeers.dk/wp-content/uploads/2018/11/dankins-470x470.jpg',
          opened: false
        }
      ]
    }
  }
  render() {
     return (
       <View style={styles.container}>
         <Image
          style={styles.center}
          source={{uri: 'https://i.imgur.com/8Mov2Pi.png'}}
          resizeMode="contain"
//          source={require('./Leaderboard.png')}

         />
         <ScrollView>
          {this.beerCreator()}
         </ScrollView>
       </View>
     );
   }
   beerCreator() {
     let beers = []
     for (let i = 0; i < this.state.beers.length; i++) {
       beers.push(
         <TouchableWithoutFeedback key={i} onPress={() => {let nowstate = this.state.beers; nowstate[i].opened = !nowstate[i].opened; this.setState({ beers: nowstate });}} >
          <View>
             <View style={[styles.leaderboardCard, !this.state.beers[i].opened ? styles.shown : {}]}>
                 <Image
                   style={styles.image}
                   source={{uri: this.state.beers[i].img}}
                   resizeMode="contain"
                 />
                <View style={styles.textContainer}>
                  <Text style={styles.textHeader}>{this.state.beers[i].title}</Text>
                  <Text style={styles.text}>{this.state.beers[i].type}</Text>
                  <Text style={styles.text}>{this.state.beers[i].alco} %</Text>
                </View>
                <View style={styles.leaderboardPositionContainer}>
                  <Text style={styles.leaderboardPosition}>{i+1}</Text>
                </View>
             </View>
             <View style={[styles.leaderboardCardOpened, this.state.beers[i].opened ? styles.shown : {}]}>
                <Text style={styles.textHeaderOpened}>{this.state.beers[i].title}</Text>
                <View style={styles.imageandvotes}>
                   <Image
                     style={styles.image}
                     source={{uri: this.state.beers[i].img}}
                     resizeMode="contain"
                   />
                   <View style={styles.voteContainer}>
                    <Text style={styles.leaderboardPositionOpened}>{i+1}</Text>
                    <Text style={styles.votes}>2311</Text>
                    <Text style={styles.votedesc}>Votes</Text>
                   </View>
                 </View>
                <View style={styles.textContainer}>

                  <Text style={styles.textOpened}>{this.state.beers[i].type}</Text>
                  <Text style={styles.textOpened}>{this.state.beers[i].alco} %</Text>
                  <Text style={styles.descdesc}>Description</Text>
                  <Text style={styles.desc}>A {this.state.beers[i].type} that tastes like Malt with hints of Blueberries and Vinegar</Text>
                </View>

             </View>
           </View>
        </TouchableWithoutFeedback>
       )
     }
     return beers;
   }
}

const styles = StyleSheet.create({

  shown: {
    display: 'flex'
  },
  container: {
    backgroundColor: '#fff',
  justifyContent: 'center',
  paddingBottom: 80
},
 center: {
   width: '80%',
   minHeight: 110,
   paddingLeft: 20,
   paddingRight: 20,
   marginBottom: 30,
   alignSelf: 'center'
 },
 leaderboardCard: {
   display: 'none',
   flexDirection: 'row',
   minHeight: 120,
   flex: 1,
   padding: 5,
   marginLeft: 10,
   marginRight: 10,
   marginBottom: 10,
   borderWidth: 1,
   borderColor: 'black'
 },
 leaderboardCardOpened: {
   display: 'none',
   minHeight: 500,
   padding: 5,
   marginLeft: 10,
   marginRight: 10,
   marginBottom: 10,
   borderWidth: 1,
   borderColor: 'black'
 },
 imageandvotes: {
   flexDirection: 'row',

 },
 voteContainer: {
   flex: 1,
   minHeight: 300
 },
 leaderboardPositionOpened: {
   fontSize: 180,
   fontFamily: 'questrial',
   textDecorationLine: 'underline',
   color: '#666',
   textAlign: 'center'

 },
 votes: {
  fontSize: 40,
  fontFamily: 'questrial',
  color: '#666',
  textAlign: 'center'
  },
  votedesc: {
    fontSize: 40,
    fontFamily: 'questrial',
    color: '#666',
    textAlign: 'center',
    textDecorationLine: 'underline'
  },
 image: {
   flex: 1,
   width: undefined,
   height: undefined
 },
 textContainer: {
   flex: 3
 },
 textHeader: {
   fontSize: 24,
   fontFamily: 'questrial',
   textDecorationLine: 'underline'
 },
 textHeaderOpened: {
   fontSize: 36,
   textAlign: 'center',
   fontFamily: 'questrial',
   textDecorationLine: 'underline'
 },
 text: {
   paddingTop: 5,
   fontSize: 20,
   fontFamily: 'questrial',
   color: '#666'
 },
 textOpened: {
   paddingTop: 5,
   fontSize: 24,
   fontFamily: 'questrial',
   color: '#666',
   marginLeft: 10

 },
 descdesc: {
   fontSize: 24,
   fontFamily: 'questrial',
   color: '#666',
   marginLeft: 10,
   textDecorationLine: 'underline'
 },
 desc: {
   fontSize: 24,
   fontFamily: 'questrial',
   color: '#666',
   marginLeft: 10
 },
 leaderboardPositionContainer: {
   flex: 1,
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center'
 },
 leaderboardPosition: {
   fontSize: 50,
   fontFamily: 'questrial',
   textDecorationLine: 'underline',

 }
});
