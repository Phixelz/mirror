import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  padding: 0 0 24px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  padding: 12px 16px 12px;
  border-radius: 4px;
  margin: 0 12px 0 0;
`;

export const SearchView = styled.View`
  flex-direction: row;
`;

export const TickersList = styled.SectionList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Section = styled.View`
  flex-direction: row;
`;

export const SectionTitle = styled.Text`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;
