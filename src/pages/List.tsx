import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { ArrowLeft, ChevronRight } from 'react-native-feather';
import { Ticker } from '../components/Ticker';

export function List() {
  return (
    <View style={styles.container}>
      <ArrowLeft
        color="#404040"
        width={28}
        height={28}
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
          Acesse a lista de fundos
          imobiliários, acões, ETFs, BDRs e Debêntures.
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
            <Text style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#FFF'
            }}>
              Filtrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.sectiontitle}>
            Fundos Imobiliários
          </Text>
          <ChevronRight
            color="#404040"
            width={24}
            height={24}
          />
        </View>

        <View style={{
          marginBottom: 16
        }}>
          <Ticker
            tickertitle="KNIP11"
            tag="Papel"
            tickervalue="R$ 102,00"
            manager="Kinea Indices FDO INV IMOB"
            viewdetails="Ver detalhes"
          />
          <Ticker
            tickertitle="VGIP11"
            tag="Papel"
            tickervalue="R$ 99,04"
            manager="Valora Cri Indice FDO INV IMOB"
            viewdetails="Ver detalhes"
          />
          <Ticker
            tickertitle="XPLG11"
            tag="Logística"
            tickervalue="R$ 94,98"
            manager="XP LOG FDO INV IMOB"
            viewdetails="Ver detalhes"
          />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.sectiontitle}>
            Ações
          </Text>
          <ChevronRight
            color="#404040"
            width={24}
            height={24}
          />
        </View>

        <View style={{
          marginBottom: 16
        }}>
          <Ticker
            tickertitle="TAEE11"
            tag="Energias"
            tickervalue="R$ 39,00"
            manager="Taesa S.A."
            viewdetails="Ver detalhes"
          />
          <Ticker
            tickertitle="BBDC4"
            tag="Banco"
            tickervalue="R$ 17,92"
            manager="Banco Bradesco SA"
            viewdetails="Ver detalhes"
          />
          <Ticker
            tickertitle="BBSE3"
            tag="Seguros"
            tickervalue="R$ 24,75"
            manager="BB Seguridade"
            viewdetails="Ver detalhes"
          />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.sectiontitle}>
            BDRs
          </Text>
          <ChevronRight
            color="#404040"
            width={24}
            height={24}
          />
        </View>

        <View style={{
          marginBottom: 16
        }}>
          <Ticker
            tickertitle="APPL34"
            tag="BDRs"
            tickervalue="R$ 73,81"
            manager="Apple"
            viewdetails="Ver detalhes"
          />
          <Ticker
            tickertitle="GOGL34"
            tag="BDRs"
            tickervalue="R$ 17,92"
            manager="Alphabet"
            viewdetails="Ver detalhes"
          />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={styles.sectiontitle}>
            ETFs
          </Text>
          <ChevronRight
            color="#404040"
            width={24}
            height={24}
          />
        </View>

        <View style={{
          marginBottom: 16
        }}>
          <Ticker
            tickertitle="BOVA11"
            tag="BRASIL"
            tickervalue="R$ 97,35"
            manager="Ishares Ibovespa Fundo de Indice"
            viewdetails="Ver detalhes"
          />
          <Ticker
            tickertitle="IVVB11"
            tag="EUA"
            tickervalue="R$ 223,70"
            manager="iShares S&P 500"
            viewdetails="Ver detalhes"
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
    backgroundColor: '#FCFCFC',
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
    marginVertical: 16,
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
});
