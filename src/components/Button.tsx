import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Button(props) {
  return (
    <View style={styles.button}>
      {props.button}
      <Text style={styles.textbutton}>
        {props.textbutton}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#404040',
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 4,
  },
  textbutton: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: '600',
  },
});
