import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Button(props) {
  return (
    <View style={styles.button}>
      {props.button}
      <Text style={styles.textbutton}>{props.textbutton}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#404040',
    alignItems: 'center',
    borderRadius: 4,
    paddingVertical: 16,
  },
  textbutton: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
});
