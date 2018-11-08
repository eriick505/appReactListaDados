import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../util';  

const PeopleListItem = props => {
    const { people, navigateToPeopleDetail } = props;
    const { title, first, last } = people.name;
    return (
     <TouchableOpacity onPress={() => { 
        // console.log('clicou ta funfando', first);
         navigateToPeopleDetail({ people }); // pega o obj people 
    }}>
        <View style={styles.line}>
        <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }}/>
          <Text style={styles.lineText}>
            { `${
            capitalizeFirstLetter(title)
            } ${
            capitalizeFirstLetter(first)
            } ${
            capitalizeFirstLetter(last)
            }` }
          </Text>
        </View>
     </ TouchableOpacity>
    );
};

export default PeopleListItem;

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center', // centraliza os items que estao dentro
        flexDirection: 'row' // alinha na horizontal 
    },
    lineText: {
      fontSize: 20,
      paddingLeft: 15,
      flex: 7 // divide o component line em 8 pedaços e reserva 7 para o text 
    },
    avatar: {
        aspectRatio: 1, // nao tem o direito de distorcer a imagem e matem ela como a original
        flex: 1, // pega um pedaço do component line que sobrou do text
        marginLeft: 15,
        borderRadius: 50
    }
});
