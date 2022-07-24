import React from 'react';
import { Button } from '../../components/Button';
import {
  Container,
  TitleStyle,
  Title,
  TextInput,
  Wrapper,
  DescriptionStyle,
  Description,
  Illustration,
} from './styles';
export function SignIn() {
  return (
    <Container>
      <TitleStyle>
        Mirror
        <Title>
          Analytic
        </Title>
      </TitleStyle>

      <Wrapper>
        <Illustration
          resizeMode='contain'
          source={require('../../assets/illustration.png')}
        />

        <DescriptionStyle>
          Descubra quanto você{' '}
          <Description>
            irá receber em dividendos.
          </Description>
        </DescriptionStyle>

        <TextInput
          placeholder='Digite seu e-mail'
          placeholderTextColor='#949494'
        />

        <Button
          type='link'
          title='Esqueceu sua senha?'
        />

        <TextInput
          secureTextEntry
          placeholder='Digite sua senha'
          placeholderTextColor='#949494'
        />

        <Button
          disabled={true}
          type='disabled'
          title='Entrar'
        />

      </Wrapper>
    </Container>
  );
}