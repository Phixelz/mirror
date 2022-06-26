import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export function CreateGoal() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Crie sua primeira carteira</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.label}>Corretora:</Text>

        <TextInput
          style={styles.input}
          placeholder="Selecione"
          placeholderTextColor="#9E9E9E"
        />

        <Text style={styles.label}>Tipo:</Text>

        <TextInput
          style={styles.input}
          placeholder="Selecione"
          placeholderTextColor="#9E9E9E"
        />

        <Text style={styles.label}>Ticker:</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: IRDM11"
          placeholderTextColor="#9E9E9E"
        />

        <Text style={styles.label}>Quantidade:</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 1000"
          keyboardType="numeric"
          placeholderTextColor="#9E9E9E"
        />

        <Text style={styles.label}>Valor investido:</Text>

        <TextInput
          style={styles.input}
          placeholder="R$ 0,00"
          keyboardType="numeric"
          placeholderTextColor="#9E9E9E"
        />

        <Text style={styles.label}>Período:</Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 12"
          keyboardType="numeric"
          placeholderTextColor="#9E9E9E"
        />
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Text style={{fontSize: 16, color: '#9F9F9F'}}>
            Total em dividendos:
          </Text>
          <Text style={{fontSize: 22, fontWeight: '700', color: '#404040'}}>
            R$ 0,00
          </Text>
        </View>
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
    backgroundColor: '#FCFCFC',
  },
  title: {
    paddingHorizontal: 24,
    paddingVertical: 24,
    fontSize: 24,
    fontWeight: '900',
    color: '#404040',
  },
  label: {
    marginHorizontal: 24,
    fontSize: 15,
    fontWeight: '500',
    color: '#404040',
    marginBottom: 4,
  },
  input: {
    marginHorizontal: 24,
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  footer: {
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  createbutton: {
    backgroundColor: '#404040',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
