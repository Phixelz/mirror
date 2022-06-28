import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { ChevronRight } from 'react-native-feather';

export function Ticker(props) {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.ticker}>
        {props.ticker}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.tickertitle}>{props.tickertitle}</Text>
          <Text style={styles.tag}>{props.tag}</Text>
        </View>
        <Text style={styles.tickervalue}>{props.tickervalue}</Text>
        <Text style={styles.tickervar}>{props.tickervar}</Text>
        <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
        }}>
        <Text style={styles.viewmore}>{props.viewmore}</Text>
        <ChevronRight
        style={styles.icon}
        stroke="#404040"
        fill="#fff"
        width={16}
        height={16}
      />
      </View>
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
  },
  tag: {
    backgroundColor: 'rgba(208, 208, 208, 0.1)',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    fontSize: 14,
    color: 'rgba(40, 40, 40, 0.7)',
    fontWeight: '500',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  tickervalue: {
    fontSize: 16,
    color: '#4E4E4E',
    fontWeight: '700',
  },
  tickervar: {
    fontSize: 14,
    color: '#B4B4B4',
    fontWeight: '400',
    marginBottom: 12,
  },
  viewmore: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#4E4E4E',
    fontWeight: '500',
  },
  icon: {
    marginHorizontal: 4,
  }
});
