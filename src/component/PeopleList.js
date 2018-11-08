import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import PeopleListItem from "./PeopleListItem";

const PeopleList = props => {// componente funcional
  const { peoples, onPressItem } = props;

  return (
      <FlatList 
        style={styles.container}
        data={peoples}
        renderItem={({ item }) => (
          <PeopleListItem
              people={item}
              navigateToPeopleDetail={onPressItem} />
        )}
        keyExtractor={item => item.name.first} />
  );
};

export default PeopleList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e2f9ff"
  }
});
