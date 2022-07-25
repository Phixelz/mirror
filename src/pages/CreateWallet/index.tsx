import React, { useRef } from 'react';
import BottomSheet from "react-native-gesture-bottom-sheet";
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
  TextView,
  SheetContainer,
  SheetList,
  Section,
  TypeText,
} from './styles';
import { Button } from '../../components/Button';
import { Info } from '../../components/Info';

const TypeList = [
  {
    id: '1',
    type: 'type',
    title: 'Fundos Imobiliários',
    subtitle: 'Renda variável',
  },
  {
    id: '2',
    type: 'type',
    title: 'Ações',
    subtitle: 'Renda variável',
  },
  {
    id: '3',
    type: 'type',
    title: 'ETFs',
    subtitle: 'Renda variável',
  },
  {
    id: '4',
    type: 'type',
    title: 'BDRs',
    subtitle: 'Renda variável (EUA)',
  },
  {
    id: '5',
    type: 'type',
    title: 'Tesouro Direto',
    subtitle: 'Renda Fixa',
  },
];

export function CreateWallet() {
  const bottomSheet = useRef<BottomSheet>();

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
            onPressIn={() => bottomSheet.current.show()}
            placeholder='Selecione'
            placeholderTextColor='#9E9E9E'
          />

          <Label>
            Ativo
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
          disabled={true}
          type='disabled'
          title='Criar carteira'
        />

        <BottomSheet
          ref={bottomSheet}
          height={500}
          sheetBackgroundColor={'#FFF'}
        >
          <SheetContainer>
            <Section>
              <TypeText>Selecione o tipo</TypeText>

              <TextInput
                placeholder='Pesquisar'
                placeholderTextColor='#9E9E9E'
              />
            </Section>

            <SheetList
              data={TypeList}
              renderItem={({ item }) => {
                return (
                  <Info
                    type={item.type}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                )
              }}
            />
          </SheetContainer>
        </BottomSheet>
      </Footer>
    </Container>
  );
}
