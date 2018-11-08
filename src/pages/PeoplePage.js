import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";

// import Header from "../component/Header";
import PeopleList from "../component/PeopleList";
import axios from "axios";

export default class PeoplePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      peoples: [],
      loading: false,
      error: false,
    };
  }

  componentDidMount() { // apos o app estar montado o react chama este metodo e ele executa o codigo abaixo
    this.setState({ loading: true });
    setTimeout(() => {
        axios.get("https://randomuser.me/api/?nat=br&results=15").then(response => {
          const { results } = response.data;
            this.setState({
              peoples: results,
              loading: false, 
            });// requisiçao ajax em uma api, onde retorna um 'result' de dados pesssoais de pessoas dentro de um array  
          }).catch(error => {
              this.setState({ 
                loading: false,
                error: true
              })
          });
   }, 1500)
}

  //renderLoading() {
   // if (this.state.loading) {
   //     return <ActivityIndicator size="large" color="#6ca2f7"/>
  //  } 
  //    return null;
  //}

  render() {
    return ( 
      <View style={styles.container}> 
          {
            this.state.loading
              ? <ActivityIndicator size="large" color="#0000ff"/>
              : this.state.error
                ? <Text style={styles.error}>Deu errado ;/ </Text>
                : <PeopleList 
                    peoples={this.state.peoples}
                    onPressItem={pageParams => { // p
                    this.props.navigation.navigate('PeopleDetail', pageParams);
                 }}/>
          }     
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    error: {
      color: 'red',
      alignSelf: 'center',
      fontSize: 17
    }
});