import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

export function SignIn() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Mirror
          <Text style={{fontWeight: '400'}}>Analytic</Text>
        </Text>
      </View>

      <View style={styles.wrapper}>
        <Image
          style={{
            width: 180,
            height: 180,
            alignSelf: 'center',
            marginBottom: 24,
          }}
          resizeMode="contain"
          source={require('../assets/illustration.png')}
        />

        <View>
          <Text style={{marginBottom: 8, fontSize: 22, fontWeight: '700', color: '#404040'}}>
            Descubra quanto você{' '}
            <Text style={{fontWeight: '400',}}>vai receber em dividendos.</Text>
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: '#404040',
              marginBottom: 24,
            }}>
            Crie objetivos com seus FIIs favoritos e descubra o valor em
            dividendos.
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#949494"
          />
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.emailforgot}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Digite sua senha"
            placeholderTextColor="#949494"
          />

          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.enterbutton}>
              <Text style={styles.textbutton}>Entrar</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <View style={styles.content}>
              <Text style={styles.newaccount}>Não tem uma conta?</Text>
              <Text
                style={[
                  styles.newaccount,
                  {fontSize: 16, fontWeight: '600', color: '#404040'},
                ]}>
                {' '}
                Criar conta
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    color: '#404040',
  },
  wrapper: {
    marginVertical: '10%',
  },
  input: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  textbutton: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFF',
  },
  content: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  emailforgot: {
    alignSelf: 'flex-end',
    fontSize: 15,
    fontWeight: '400',
    color: '#404040',
    marginBottom: 8,
  },
  newaccount: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7A7A',
    marginVertical: 16,
  },
  enterbutton: {
    alignItems: 'center',
    backgroundColor: '#404040',
    borderRadius: 4,
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
});
