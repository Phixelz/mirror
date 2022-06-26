import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Card} from '../components/Card';

export function Home() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{fontSize: 16, fontWeight: '400'}}>Meu Patrimônio</Text>
        <Text style={styles.title}>R$ 0,00</Text>
      </View>

      <View style={styles.welcome}>
        <Text
          style={{
            marginBottom: 4,
            fontSize: 18,
            color: '#404040',
            fontWeight: '700',
          }}>
          Seja bem-vindo(a), Investidor!
        </Text>
        <Text style={{fontSize: 15, fontWeight: '400', color: '#909090'}}>
          Você está utilizando a versão freemium (Limitada) do app.
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginBottom: 24}}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          <Card
            indicetitle="IFIX"
            indicevalue="2.714,62"
            indicevar="−1,05 (0,039%)"
            open="• Abertura 2.715,71"
            up="• Alta 2.720,15"
          />

          <Card
            indicetitle="IBOV"
            indicevalue="115.310,91"
            indicevar="−2.234,58 (1,98%)"
            open="• Abertura 113.076,33"
            up="• Alta 115.310,91"
          />

          <Card
            indicetitle="S&P 500"
            indicevalue="4.463,12"
            indicevar="−51,45 (1,17%)"
            open="• Abertura 4.465,40"
            up="• Alta 2.720,15"
          />
        </ScrollView>
      </View>

      <View>
        <Text
          style={{
            marginBottom: 8,
            fontSize: 18,
            fontWeight: '700',
            color: '#404040',
          }}>
          Minhas Carteiras
        </Text>
      </View>

      <View style={styles.walletcreate}>
        <Text style={{fontSize: 15, color: '#909090'}}>
          Você ainda não possui nenhuma carteira
        </Text>
        <Text style={{ marginBottom: 16, fontSize: 20, fontWeight: '700', color: '#404040'}}>
          Crie sua primeira carteira
        </Text>
        <TouchableOpacity activeOpacity={0.9}>
          <View style={styles.createbutton}>
            <Text style={{fontSize: 15, fontWeight: '600', color: '#FFF'}}>
              Criar carteira
            </Text>
          </View>
        </TouchableOpacity>
      </View>
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
    marginBottom: 8,
  },
  welcome: {
    backgroundColor: '#FFF',
    marginBottom: 16,
    paddingVertical: 24,
    paddingHorizontal: 16,
    marginVertical: 8,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 8,
  },
  walletcreate: {
    backgroundColor: '#FFF',
    paddingVertical: 24,
    paddingHorizontal: 16,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    borderRadius: 8,
  },
  createbutton: {
    backgroundColor: '#404040',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: 16,
  },
});
