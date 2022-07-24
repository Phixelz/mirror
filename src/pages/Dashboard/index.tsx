import React from 'react';
import {
  Cards,
  Container,
  Header,
  BaseTitle,
  Title,
  Subtitle,
  Icon,
  Content,
} from './styles';
import { Info } from '../../components/Info';
import { Card } from '../../components/Card';
import { Button } from '../../components/Button';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Content>
          <BaseTitle>
            Meu Patrimônio
          </BaseTitle>
          <Title>
            R$ 0,00
          </Title>
        </Content>
        <Icon />
      </Header>

      <Info
        type='notification'
        title='Seja bem-vindo, Investor!'
        subtitle='Você está utilizando a versão freemium (Limitada) do app.'
      />

      <Cards>
        <Card
          indicetitle='IFIX'
          indicevalue='2.714,62'
          indicevar='-1,05 (0,039%)'
          open='• Abertura 113.076,33'
          up='• Alta 115.310,91'
        />

        <Card
          indicetitle='IBOV'
          indicevalue='115.310,91'
          indicevar='-2.234,58 (1,98%)'
          open='• Abertura 2.715,71'
          up='• Alta 2.720,15'
        />

        <Card
          indicetitle='S&P 500'
          indicevalue='4.463,12'
          indicevar='-51,45 (1,17%)'
          open='• Abertura 4.465,40'
          up='• Alta 2.720,15'
        />
      </Cards>

      <Subtitle>
        Minhas Carteiras
      </Subtitle>

      <Info
        type='createwallet'
        title='Você ainda não possui nenhuma carteira'
        subtitle='Crie sua primeira carteira'
      />

      <Button
        type='default'
        title='Criar carteira'
      />
    </Container>
  );
}
