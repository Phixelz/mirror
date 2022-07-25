import React from 'react';
import {
  Container,
  Title,
  Subtitle
} from './styles';

interface Props {
  type: 'default' | 'createwallet' | 'notification' | 'type';
  title: string;
  subtitle: string;
}

export function Info({ type, title, subtitle }: Props) {
  return (
    <Container type={type}>
      <Title type={type}>{title}</Title>
      <Subtitle type={type}>{subtitle}</Subtitle>
    </Container>
  );
}
