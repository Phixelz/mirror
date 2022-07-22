import React from 'react';
import {
  Container,
  ContentVar,
  IndiceTitle,
  IndiceValue,
  IndiceVar,
  Divider,
  Open,
  Up,
  Icon,
} from './styles';

interface Props {
  indicetitle: string;
  indicevalue: string;
  indicevar: string;
  open: string;
  up: string;
  icon: string;
}

export function IndiceCard({
  indicetitle,
  indicevalue,
  indicevar,
  open,
  up,
}: Props) {
  return (
    <Container>
      <IndiceTitle>{indicetitle}</IndiceTitle>
      <IndiceValue>{indicevalue}</IndiceValue>

      <ContentVar>
        <IndiceVar>{indicevar}</IndiceVar>
        <Icon />
      </ContentVar>

      <Divider />
      <Open>{open}</Open>

      <Divider />
      <Up>{up}</Up>
    </Container>
  );
}
