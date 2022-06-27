import React from 'react';
import {View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import {Ticker} from '../components/Ticker';

export function List() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista</Text>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        placeholderTextColor="#949494"
      />
        <ScrollView showsVerticalScrollIndicator={false}>
      <Text
        style={{
          marginBottom: 8,
          fontSize: 18,
          fontWeight: '700',
          color: '#404040',
        }}>
        Fundos Imobiliários
      </Text>

    
      <View style={{ marginBottom: 24, }}>
          <Ticker
            tickertitle="KNIP11"
            tickervalue="R$ 102,00"
            tickervar="Kinea Indices FDO INV IMOB - FII"
            details="Detalhes"
          />

          <Ticker
            tickertitle="VGIP11"
            tickervalue="R$ 99,04"
            tickervar="Valora Cri Indice FDO INV IMOB - FII"
            details="Detalhes"
          />

          <Ticker
            tickertitle="RECR11"
            tickervalue="R$ 100,38"
            tickervar="FII REC Recebíveis Imobiliários"
            details="Detalhes"
          />
      </View>
      
        <Text
          style={{
            marginBottom: 8,
            fontSize: 18,
            fontWeight: '700',
            color: '#404040',
          }}>
          Ações
        </Text>

        <Ticker
          tickertitle="TAEE11"
          tickervalue="R$ 39,00"
          tickervar="Taesa S.A."
          details="Detalhes"
        />

        <Ticker
          tickertitle="BBDC4"
          tickervalue="R$ 17,92"
          tickervar="Banco Bradesco SA"
          details="Detalhes"
        />

        <Ticker
          tickertitle="BBSE3"
          tickervalue="R$ 24,75"
          tickervar="BB Seguridade"
          details="Detalhes"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#FEFEFE',
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: '#404040',
    marginBottom: 24,
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
});
