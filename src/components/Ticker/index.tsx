import React from 'react';
import {
  Container,
  Header,
  Tag,
  TagName,
  TickerTitle,
  TickerValue,
  Manager,
  Footer,
} from './styles';

interface Props {
  type: 'up' | 'down';
  tickertitle: string;
  tagname: string;
  tickervalue: string;
  manager: string;
}

export function Ticker({
  type,
  tickertitle,
  tagname,
  tickervalue,
  manager,
}: Props) {
  return (
    <Container>
      <Header>
        <TickerTitle>{tickertitle}</TickerTitle>
        <Tag>
          <TagName>{tagname}</TagName>
        </Tag>
      </Header>

      <Manager>{manager}</Manager>

      <Footer>
        <TickerValue type={type}>{tickervalue}</TickerValue>
      </Footer>
    </Container>
  );
}
