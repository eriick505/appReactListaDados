import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import Line from '../component/Line';

export default class PeopleDetailPage extends React.Component {
  render() {
    const { people } = this.props.navigation.state.params; // pega todos os dados de people

    return (
      <View style={styles.container}>
        <ScrollView>
        <Image 
             style={styles.avatar} 
             source={{ uri: people.picture.medium }} />
        <View style={styles.detailtContainer}>
          <Line label="Email:" content={ people.email }/>
          <Line label="Cidade:" content={ people.location.city }/>
          <Line label="Estado:" content={ people.location.state }/>
          <Line label="Telefone:" content={ people.phone }/>
          <Line label="Celular:" content={ people.cell }/>
          <Line label="Nacionalidade:" content={ people.nat }/>
        </View>
        </ScrollView> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  avatar: {
    aspectRatio: 1,
  },
  detailtContainer: {
    backgroundColor: "#e2f9ff",
    marginTop: 10,
    elevation: 5 // impressao do component elevado 3d
  },
});
