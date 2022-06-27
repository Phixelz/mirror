import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export function Ticker(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.ticker}>
        {props.ticker}
        <View style={{ flex: 1,flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.tickertitle}>{props.tickertitle}</Text>
          <Text style={styles.tag}>{props.tag}</Text>
        </View>
        <Text style={styles.tickervalue}>{props.tickervalue}</Text>
        <Text style={styles.tickervar}>{props.tickervar}</Text>
        <Text style={styles.viewmore}>{props.viewmore}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ticker: {
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
  },
  tickertitle: {
    flex: 1,
    fontSize: 14,
    color: '#404040',
    fontWeight: '300',
    alignSelf: 'flex-start',
  },
  tag: {
    backgroundColor: 'rgba(208, 208, 208, 0.1)',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    fontSize: 14,
    color: '#606060',
    fontWeight: '500',
    borderRadius: 4,
    paddingHorizontal: 12,
  },
  tickervalue: {
    fontSize: 18,
    color: '#404040',
    fontWeight: '700',
  },
  tickervar: {
    fontSize: 15,
    color: '#B4B4B4',
    fontWeight: '400',
    marginBottom: 12,
  },
  viewmore: {
    alignSelf: 'flex-start',
    fontSize: 15,
    color: '#4E4E4E',
    fontWeight: '500',
  },
});
