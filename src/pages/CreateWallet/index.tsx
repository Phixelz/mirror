import React from 'react';
import {
  Container,
  Header,
  Icon,
  Wrapper,
  Label,
  Form,
  TextInput,
  Footer,
  Title,
  FooterTitle,
  FooterSubtitle,
  TextView
} from './styles';
import { Button } from '../../components/Button';

export function CreateWallet() {
  return (
    <Container>
      <Header>
        <Title>
          Criar carteira
        </Title>
        <Icon />
      </Header>

      <Wrapper
        showsVerticalScrollIndicator={false}>
        <Form>
          <Label>
            Corretora
          </Label>
          <TextInput
            placeholder='Nome da corretora'
            placeholderTextColor='#9E9E9E'
          />

          <Label>
            Tipo
          </Label>
          <TextInput
            placeholder='Selecione'
            placeholderTextColor='#9E9E9E'
          />

          <Label>
            Ticker
          </Label>
          <TextInput
            placeholder='Ex: IRDM11'
            placeholderTextColor='#9E9E9E'
          />

          <Label>
            Quantidade
          </Label>
          <TextInput
            placeholder='Ex: 1000'
            keyboardType='numeric'
            placeholderTextColor='#9E9E9E'
          />

          <Label>
            Valor investido
          </Label>
          <TextInput
            placeholder='R$ 0,00'
            keyboardType='numeric'
            placeholderTextColor='#9E9E9E'
          />

          <Label>
            Período
          </Label>
          <TextInput
            placeholder='Ex: 12'
            keyboardType='numeric'
            placeholderTextColor='#9E9E9E'
          />

        </Form>
      </Wrapper>

      <Footer>
        <TextView>
          <FooterTitle>
            Total em dividendos
          </FooterTitle>

          <FooterSubtitle>
            R$ 0,00
          </FooterSubtitle>
        </TextView>

        <Button
          type='default'
          title='Criar carteira'
        />

      </Footer>
    </Container>
  );
}
