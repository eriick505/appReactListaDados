import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Line = ({label = " ", content = "-"}) => { // posso fazer o destruct do props dentro do parametro direto e o uso das aspas diz que as propriedas podem ser undifined evitando a parada do app
     return (
        <View style={styles.line}>
            <Text style={[
                styles.cell, 
                styles.label, 
                label.length > 9 ? styles.longLabel : null // verifica o tamanho da label
                ]}>{ label }</Text>
            <Text style={[styles.cell, styles.content]}>{ content }</Text>
          </View>
     );
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row', // muda a direçao em que os elementos seram adicionados
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#C5C5C5'
      },
      cell: {
        fontSize: 18,
        paddingLeft: 5
      },
      label: {
        fontWeight: 'bold',
        flex: 1
      },
      content: { // criado para fixar as celulas da tab em tamanho unico
        flex: 3 // dividiu o tamanho da Line por 4 
      }, 
      longLabel: { // tratar o tamanho dos labels de caracteres grandes
        fontSize: 11
      }
});

export default Line;