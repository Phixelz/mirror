import styled from 'styled-components/native';
import {TrendingDown } from 'react-native-feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: ${RFValue(270)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.primary_light};
  border-width: 1px;
  border-radius: 4px;
  padding: 24px;
  margin-right: 12px;
`;

export const ContentVar = styled.View`
  flex-direction: row;
`;

export const Icon = styled(TrendingDown)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.warning};
  margin: 0 8px;
`;

export const IndiceTitle = styled.Text`
  font-size: 16px;
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
`;

export const IndiceValue = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const IndiceVar = styled.Text`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.warning};
`;

export const Divider = styled.View`
  margin: 16px 0;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_light};
`;

export const Open = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Up = styled.Text`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.success};
`;
