import React from 'react';
import {
  Container,
  Title,
  Subtitle
} from './styles';

interface Props {
  type: 'default' | 'notification';
  title: string;
  subtitle: string;
}

export function Info({ type, title, subtitle }: Props) {
  return (
    <Container type={type}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}
