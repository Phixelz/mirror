import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Home} from 'react-native-feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px 0;
`;

export const Icon = styled(Home)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary_dark};
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 900;
  padding: 24px 0;
  color: ${({ theme }) => theme.colors.primary_dark};
`;

export const Form = styled.ScrollView.attrs({
  showsVerticalIndicatorScroll: false,
})`

padding: 0 24px 0;
`;

export const Label = styled.Text`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextInput = styled.TextInput`
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 24px;
  background-color: ${({ theme }) => theme.colors.secondary_dark};
`;

export const Footer = styled.View`
  color: ${({ theme }) => theme.colors.white};
  justify-content: space-between;
  flex-direction: row;
  padding: 16px 24px;
`;

export const FooterTitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const FooterSubtitle = styled.Text`
  font-size: 22px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TextView = styled.View`
`;

export const SheetContainer = styled.View`
  flex: 1;
  padding: 24px 16px;
`;

export const SheetList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const TypeText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

export const Section = styled.View`
`;