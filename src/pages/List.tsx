import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ArrowLeft, ChevronRight} from 'react-native-feather';
import {Ticker} from '../components/Ticker';

export function List() {
  return (
    <View style={styles.container}>
      <ArrowLeft
        style={styles.icon}
        stroke="#404040"
        fill="#fff"
        width={24}
        height={24}
      />
      <View style={styles.info}>
        <Text
          style={{
            marginBottom: 4,
            fontSize: 16,
            color: '#4E4E4E',
            fontWeight: '700',
          }}>
          Lista de Ativos
        </Text>

        <Text
          style={{
            fontSize: 14,
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
              backgroundColor: '#404040',
            }}>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#FFF'}}>
              Filtrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.sectiontitle}>Fundos Imobiliários</Text>
          <ChevronRight stroke="#404040" fill="#fff" width={24} height={24} />
        </View>

        <View style={{marginBottom: 16}}>
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

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.sectiontitle}>Ações</Text>
          <ChevronRight stroke="#404040" fill="#fff" width={24} height={24} />
        </View>

        <View style={{marginBottom: 16}}>
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
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.sectiontitle}>BDRs</Text>
          <ChevronRight stroke="#404040" fill="#fff" width={24} height={24} />
        </View>

        <View style={{marginBottom: 16}}>
          <Ticker
            tickertitle="APPL34"
            tag="BDR"
            tickervalue="R$ 73,81"
            tickervar="Apple"
            viewmore="Ver detalhes"
          />

          <Ticker
            tickertitle="GOGL34"
            tag="BDR"
            tickervalue="R$ 17,92"
            tickervar="Alphabet"
            viewmore="Ver detalhes"
          />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.sectiontitle}>ETFs</Text>
          <ChevronRight stroke="#404040" fill="#fff" width={24} height={24} />
        </View>

        <View style={{marginBottom: 16}}>
          <Ticker
            tickertitle="BOVA11"
            tag="ETF"
            tickervalue="R$ 97,35"
            tickervar="Ishares Ibovespa Fundo de Indice"
            viewmore="Ver detalhes"
          />

          <Ticker
            tickertitle="IVVB11"
            tag="ETF"
            tickervalue="R$ 223,70"
            tickervar="iShares S&P 500"
            viewmore="Ver detalhes"
          />
        </View>
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
    marginHorizontal: 12,
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
    fontSize: 16,
    fontWeight: '700',
    color: '#404040',
  },
  icon: {
    marginBottom: 16,
  },
});
