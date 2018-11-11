import React from 'react';
import { Text, View, StyleSheet, Image, Picker, TouchableOpacity } from 'react-native';
import ModalSelector from 'react-native-modal-selector'
let index = 0;
const types = {
  beerType: [
    { key: index++, label:'Altbier'},
    { key: index++, label:'Amber ale'},
    { key: index++, label:'Barley wine'},
    { key: index++, label:'Berliner Weisse'},
    { key: index++, label:'Bière de Garde'},
    { key: index++, label:'Bitter'},
    { key: index++, label:'Blonde Ale'},
    { key: index++, label:'Bock'},
    { key: index++, label:'Brown ale'},
    { key: index++, label:'Steam Beer'},
    { key: index++, label:'Cream Ale'},
    { key: index++, label:'Dortmunder Export'},
    { key: index++, label:'Doppelbock'},
    { key: index++, label:'Dunkel'},
    { key: index++, label:'Dunkelweizen'},
    { key: index++, label:'Eisbock'},
    { key: index++, label:'Flanders red ale'},
    { key: index++, label:'Summer ale'},
    { key: index++, label:'Gose'},
    { key: index++, label:'Gueuze'},
    { key: index++, label:'Hefeweizen'},
    { key: index++, label:'Helles'},
    { key: index++, label:'India pale ale'},
    { key: index++, label:'Kölsch'},
    { key: index++, label:'Lambic'},
    { key: index++, label:'Light ale'},
    { key: index++, label:'Maibock'},
    { key: index++, label:'Malt liquor'},
    { key: index++, label:'Mild'},
    { key: index++, label:'Märzenbier'},
    { key: index++, label:'Old ale'},
    { key: index++, label:'Oud bruin'},
    { key: index++, label:'Pilsner'},
    { key: index++, label:'Porter'},
    { key: index++, label:'Red ale'},
    { key: index++, label:'Roggenbier'},
    { key: index++, label:'Saison'},
    { key: index++, label:'Scotch ale'},
    { key: index++, label:'Stout'},
    { key: index++, label:'Schwarzbier'},
    { key: index++, label:'Vienna lager'},
    { key: index++, label:'witbier'},
    { key: index++, label:'Weissbier'},
    { key: index++, label:'Weizenbock'}
  ],
  flavour: [
    { key: index++, label:'Blueberry'},
    { key: index++, label:'Malt'},
    { key: index++, label:'Asparagus'},
    { key: index++, label:'Barley'},
    { key: index++, label:'Hops'},
    { key: index++, label:'Grapes'}
  ]
}
export class DescriptionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardSchema: [
        {
          key: 0,
          label: 'A [beer type]',
          pretext: 'A',
          type: types.beerType,
          posttext: '',
          placeholder: '[select beertype]'
        },
        {
          key: 1,
          label: 'with a hint of [flavour]',
          pretext: 'with a hint of',
          type: types.flavour,
          posttext: '',
          placeholder: '[select hint]'
        },
        {
          key: 2,
          label: 'that tastes like [flavour]',
          pretext: 'that tastes like ',
          type: types.flavour,
          posttext: '',
          placeholder: '[select flavour]'
        },
        {
          key: 3,
          label: 'brewed with [flavour]',
          pretext: 'brewed with ',
          type: types.flavour,
          posttext: '',
          placeholder: '[select flavour]'
        },
      ],
      cardData: [
        {
          cardSchema: 0,
          choice: ''
        }
      ],
      cards: []
    };

  }
  componentDidMount() {
    this.updateCards.bind(this)();
  }
  render() {

    return (
      <View>
        {this.state.cards}
        <ModalSelector
        ref={selector => { this.selector = selector; }}
        data={this.state.cardSchema}
        onChange={this.createNewDescriptionCard.bind(this)}
        customSelector={
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {this.selector.open();}}
            >
              <Text style={styles.buttonIcon}>+</Text>
          </TouchableOpacity>
        }
        />
      </View>
    );
  }

  createNewDescriptionCard(choice) {
    this.state.cardData = [];
    this.state.cardData.push({cardSchema: this.state.cardSchema.indexOf(choice), choice: ''});
    this.updateCards();
    console.log(this.state.cards.length);
  }

  updateCards() {
    for (let i = 0; i < this.state.cardData.length; i++) {
      console.log("Opdaterer "+this.state.cardData.length+" kort");
      let cardSchema = this.state.cardData[i].cardSchema;
      let newCards = this.state.cards;
      newCards.push(
        <View style={styles.descriptionCard} key={this.state.cards.length}>
          <View style={styles.innerContainer}>
            <Text style={styles.text}>{this.state.cardSchema[cardSchema].pretext} {this.state.cardData[i].choice}</Text>

            <ModalSelector
              selectStyle={styles.picker}
              selectTextStyle={styles.pickerText}
              data={this.state.cardSchema[cardSchema].type}
              initValue={this.state.cardSchema[cardSchema].placeholder}
              onChange={(option)=>{
              let newCardData = this.state.cardData;
              newCardData[i].choice = option;
              this.setState({cardData: newCardData})
            }} />
            <Text style={styles.text}>{this.state.cardSchema[cardSchema].posttext} {this.state.cardData[i].choice}</Text>
            
          </View>
        </View>
      )
      this.setState({cards: newCards});
    }
  }

  createPickerOptions() {
    let options = [];
    for (let i = 0; i < types.beerType.length; i++) {
      options.push(
        <Picker.Item key={i} label={types.beerType[i]} value={types.beerType[i]} />
      )
    }
    return options;

  }





}
const styles = StyleSheet.create({
  descriptionCard: {
    backgroundColor: 'rgba(0,0,0,0.16)',
    flex: 1,
    margin: 30,
    marginBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
    paddingBottom: 40

  },
  innerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 22

  },
  picker: {
    padding: 5
  },
  pickerText: {
    fontSize: 22,
    padding: 0
  },
  buttonStyle: {
    backgroundColor: 'lightgreen',
    width: 70,
    height: 70,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 70,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 40
  },
  buttonIcon: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white'
  }

});
