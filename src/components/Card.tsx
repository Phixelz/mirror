import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Card(props) {
  return (
    <View style={styles.card}>
      {props.indice}
      <Text style={styles.indicetitle}>{props.indicetitle}</Text>
      <Text style={styles.indicevalue}>{props.indicevalue}</Text>
      <Text style={styles.indicevar}>{props.indicevar}</Text>

      <View style={styles.divider}>{props.divider}</View>
      
      <Text style={styles.open}>{props.open}</Text>
      <View style={styles.divider}>{props.divider}</View>
      <Text style={styles.up}>{props.up}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    width: 320,
    marginLeft: 0,
    marginHorizontal: 16,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 8,
  },
  indicetitle: {
    fontSize: 18,
    color: '#404040',
    fontWeight: '300',
  },
  indicevalue: {
    fontSize: 28,
    color: '#404040',
    fontWeight: '700',
  },
  indicevar: {
    fontSize: 18,
    color: '#C25B5B',
    fontWeight: '500',
  },
  divider: {
    marginVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
  },
  open: {
    fontSize: 16,
    color: '#404040',
    fontWeight: '500',
  },
  up: {
    fontSize: 16,
    color: '#4DB878',
    fontWeight: '500',
  },
});
