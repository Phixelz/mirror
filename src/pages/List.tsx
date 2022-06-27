import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Ticker} from '../components/Ticker';

export function List() {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text
          style={{
            marginBottom: 4,
            fontSize: 18,
            color: '#4E4E4E',
            fontWeight: '700',
          }}>
          Lista de Ativos
        </Text>

        <Text
          style={{
            fontSize: 16,
            fontWeight: '400',
            color: '#4E4E4E',
          }}>
          Acesse a lista de fundos imobiliários, acões, ETFs, BDRs e Debêntures.
        </Text>
      </View>

      <View
        style={{
          marginVertical: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#949494"
        />
        <View>
          <TouchableOpacity
            activeOpacity={0.9}
            style={{
              flex: 1,
              paddingHorizontal: 16,
              justifyContent: 'center',
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#E7E7E7',
              backgroundColor: '#404040',
            }}>
            <Text style={{fontSize: 15, fontWeight: '500', color: '#FFF'}}>
              Filtrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text
          style={styles.sectiontitle}>
          Fundos Imobiliários
        </Text>

        <View style={{marginBottom: 24}}>
          <Ticker
            tickertitle="KNIP11"
            tag="Papel"
            tickervalue="R$ 102,00"
            tickervar="Kinea Indices FDO INV IMOB"
            viewmore="Ver detalhes"
          />

          <Ticker
            tickertitle="VGIP11"
            tag="Papel"
            tickervalue="R$ 99,04"
            tickervar="Valora Cri Indice FDO INV IMOB"
            viewmore="Ver detalhes"
          />

          <Ticker
            tickertitle="XPLG11"
            tag="Logística"
            tickervalue="R$ 94,98"
            tickervar="XP LOG FDO INV IMOB"
            viewmore="Ver detalhes"
          />
        </View>

        <Text style={styles.sectiontitle}>Ações</Text>

        <Ticker
          tickertitle="TAEE11"
          tag="Energias"
          tickervalue="R$ 39,00"
          tickervar="Taesa S.A."
          viewmore="Ver detalhes"
        />

        <Ticker
          tickertitle="BBDC4"
          tag="Banco"
          tickervalue="R$ 17,92"
          tickervar="Banco Bradesco SA"
          viewmore="Ver detalhes"
        />

        <Ticker
          tickertitle="BBSE3"
          tag="Seguros"
          tickervalue="R$ 24,75"
          tickervar="BB Seguridade"
          viewmore="Ver detalhes"
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
  input: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    marginLeft: 0,
  },
  info: {
    backgroundColor: 'rgba(208, 208, 208, 0.1)',
    marginBottom: 12,
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderColor: '#F2F2F2',
    borderWidth: 1,
  },
  sectiontitle: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '700',
    color: '#404040',
  },
});
