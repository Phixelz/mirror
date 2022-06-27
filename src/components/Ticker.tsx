import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function Ticker(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
    <View style={styles.ticker}>
      {props.fii}
      <Text style={styles.tickertitle}>{props.tickertitle}</Text>
      <Text style={styles.tickervalue}>{props.tickervalue}</Text>
      <Text style={styles.tickervar}>{props.tickervar}</Text>

      <Text style={styles.divider}>{props.divider}</Text>

      <Text style={styles.addticker}>{props.details}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ticker: {
    backgroundColor: '#FFF',
    marginLeft: 0,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
  },
  tickertitle: {
    fontSize: 15,
    color: '#404040',
    fontWeight: '300',
  },
  tickervalue: {
    fontSize: 22,
    color: '#404040',
    fontWeight: '700',
  },
  tickervar: {
    fontSize: 16,
    color: '#B4B4B4',
    fontWeight: '400',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#F0F0F0',
    marginBottom: 12,
  },
  addticker: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#404040',
    fontWeight: '600',
  },
});
