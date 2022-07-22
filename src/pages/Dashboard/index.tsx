import React from 'react';
import {
  IndiceCards,
  Container,
  Header,
  BaseTitle,
  Title,
  Notification,
  Subtitle,
  NtTitle,
  NtSubtitle,
  Wrapper,
  BaseTitleWrapper,
  WrapperTitle,
  Icon,
  Content,
} from './styles';
import { Button } from '../../components/Button';
import { IndiceCard } from '../../components/Card';

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

      <Notification>
        <NtTitle>
          Seja bem-vindo, Investor!
        </NtTitle>
        <NtSubtitle>
          Você está utilizando a versão freemium (Limitada) do app.
        </NtSubtitle>
      </Notification>

      <IndiceCards>
        <IndiceCard
          indicetitle="IFIX"
          indicevalue="2.714,62"
          indicevar="-1,05 (0,039%)"
          open="• Abertura 113.076,33"
          up="• Alta 115.310,91"
        />

        <IndiceCard
          indicetitle="IBOV"
          indicevalue="115.310,91"
          indicevar="-2.234,58 (1,98%)"
          open="• Abertura 2.715,71"
          up="• Alta 2.720,15"
        />

        <IndiceCard
          indicetitle="S&P 500"
          indicevalue="4.463,12"
          indicevar="-51,45 (1,17%)"
          open="• Abertura 4.465,40"
          up="• Alta 2.720,15"
        />
      </IndiceCards>

      <Subtitle>
        Minhas Carteiras
      </Subtitle>

      <Wrapper>
        <BaseTitleWrapper>
          Você ainda não possui nenhuma carteira
        </BaseTitleWrapper>

        <WrapperTitle>
          Crie sua primeira carteira
        </WrapperTitle>

        <Button
          type="default"
          title="Criar carteira"
        />

      </Wrapper>
    </Container >
  );
}
