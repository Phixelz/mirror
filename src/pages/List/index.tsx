import React from 'react';
import {
  Container,
  Header,
  TextInput,
  SearchView,
  TickersList,
  SectionTitle,
} from './styles';
import { Info } from '../../components/Info';
import { Button } from '../../components/Button';
import { Ticker } from '../../components/Ticker';

const FIIsList = [
  {
    id: '1',
    type: 'up',
    tickertitle: 'KNIP11',
    tagname: 'Papel',
    tickervalue: 'R$ 102,00',
    manager: 'Kinea Indices FDO INV IMOB',
    viewdetails: 'Ver detalhes',
  },
  {
    id: '2',
    type: 'down',
    tickertitle: 'VGIP11',
    tagname: 'Papel',
    tickervalue: 'R$ 99,04',
    manager: 'Valora Cri Indice FDO INV IMOB',
    viewdetails: 'Ver detalhes',
  },
  {
    id: '3',
    type: 'up',
    tickertitle: 'XPLG11',
    tagname: 'Logística',
    tickervalue: 'R$ 99,04',
    manager: 'XP LOG FDO INV IMOB',
    viewdetails: 'Ver detalhes',
  },
];

const IBOVList = [
  {
    id: '4',
    type: 'up',
    tickertitle: 'TAEE11',
    tagname: 'Energias',
    tickervalue: 'R$ 39,00',
    manager: 'Taesa S.A.',
  },
  {
    id: '5',
    type: 'down',
    tickertitle: 'BBDC4',
    tagname: 'Bancos',
    tickervalue: 'R$ 17,92',
    manager: 'Banco Bradesco SA',
  },
  {
    id: '6',
    type: 'up',
    tickertitle: 'BBSE3',
    tagname: 'Seguros',
    tickervalue: 'R$ 24,75',
    manager: 'BB Seguridade',
  },
];

const BDRsList = [
  {
    id: '7',
    type: 'down',
    tickertitle: 'APPL34',
    tagname: 'BDRs',
    tickervalue: 'R$ 73,81',
    manager: 'Apple',
  },
  {
    id: '8',
    type: 'down',
    tickertitle: 'GOGL34',
    tagname: 'BDRs',
    tickervalue: 'R$ 17,92',
    manager: 'Alphabet',
  },
];

const ETFsList = [
  {
    id: '9',
    type: 'down',
    tickertitle: 'BOVA11',
    tagname: 'Brasil',
    tickervalue: 'R$ 97,35',
    manager: 'Ishares Ibovespa Fundo de Indice',
  },
  {
    id: '10',
    type: 'up',
    tickertitle: 'IVVB11',
    tagname: 'EUA',
    tickervalue: 'R$ 223,70',
    manager: 'iShares S&P 500',
  },
];

export function List() {
  return (
    <Container>
      <Header>
        <Info
          type='default'
          title='Lista de Ativos'
          subtitle='Fundos imobiliários, ações, ETFS, BDRs e Debêntures.'
        />

        <SearchView>
          <TextInput
            placeholder='Pesquisar'
            placeholderTextColor='#949494'
          />

          <Button
            type='default'
            title='Filtrar'
          />

        </SearchView>
      </Header>

      <TickersList
        sections={[
          {
            sectiontitle: 'Fundos Imobiliários',
            data: FIIsList,
          },
          {
            sectiontitle: 'Ações',
            data: IBOVList,
          },
          {
            sectiontitle: 'BDRs',
            data: BDRsList,
          },
          {
            sectiontitle: 'ETFs',
            data: ETFsList,
          },
        ]}
        renderItem={({ item }) => (
          <Ticker
            type={item.type}
            tickertitle={item.tickertitle}
            tagname={item.tagname}
            tickervalue={item.tickervalue}
            manager={item.manager}
          />
        )}
        renderSectionHeader={({ section }) => (
          <SectionTitle>{section.sectiontitle}</SectionTitle>
        )}
      />
    </Container>
  );
}
