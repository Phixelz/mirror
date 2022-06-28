import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
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
          <Text style={styles.tickertitle}>
            {props.tickertitle}
          </Text>

          <Text style={styles.tag}>
            {props.tag}
          </Text>
        </View>

        <Text style={styles.tickervalue}>
          {props.tickervalue}
        </Text>

        <Text style={styles.manager}>
          {props.manager}
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
          }}>
          <Text style=
            {styles.viewdetails}>
            {props.viewdetails}
          </Text>
          <ChevronRight
            color="#404040"
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
    borderColor: '#F2F2F2',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
  },
  tickertitle: {
    flex: 1,
    fontSize: 14,
    color: '#404040',
    fontWeight: '400',
  },
  tag: {
    borderColor: '#F2F2F2',
    borderWidth: 1,
    fontSize: 14,
    color: 'rgba(40, 40, 40, 0.7)',
    fontWeight: '500',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  tickervalue: {
    fontSize: 18,
    color: '#4E4E4E',
    fontWeight: '700',
  },
  manager: {
    fontSize: 15,
    color: '#A1A1A1',
    fontWeight: '400',
    marginBottom: 12,
  },
  viewdetails: {
    fontSize: 15,
    color: '#4E4E4E',
    fontWeight: '500',
    marginRight: 4,
  },
});
