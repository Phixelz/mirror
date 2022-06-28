import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Card(props) {
  return (
    <View style={styles.card}>
      {props.indice}
      <Text style={styles.indicetitle}>
        {props.indicetitle}
      </Text>
      <Text style={styles.indicevalue}>
        {props.indicevalue}
      </Text>
      <Text style={styles.indicevar}>
        {props.indicevar}
      </Text>
      <View style={styles.divider}>
        {props.divider}
      </View>
      <Text style={styles.open}>
        {props.open}
      </Text>
      <View style={styles.divider}>
        {props.divider}
      </View>
      <Text style={styles.up}>
        {props.up}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 320,
    backgroundColor: '#FFF',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 4,
    marginLeft: 0,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  indicetitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#404040',
  },
  indicevalue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#404040',
  },
  indicevar: {
    fontSize: 15,
    fontWeight: '500',
    color: '#C25B5B',
  },
  divider: {
    marginVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },
  open: {
    fontSize: 14,
    fontWeight: '500',
    color: '#404040',
  },
  up: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4DB878',
  },
});