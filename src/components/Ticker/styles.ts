import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  type: 'up' | 'down';
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.primary_light};
  border-width: 1px;
  border-radius: 4px;
  padding: 24px 16px;
  margin: 0 0 12px 0;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const Tag = styled.View`
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_light};
  border-radius: 4px;
  padding: 0 12px;
`;

export const TagName = styled.Text`
  font-size: ${RFValue(13)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TickerTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const TickerValue = styled.Text<Props>`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  line-height: 32px;

  ${(props) => props.type === 'up' && css`
  color: ${({ theme }) => theme.colors.success};
 `}

 ${(props) => props.type === 'down' && css`
  color: ${({ theme }) => theme.colors.warning};
 `}
`;

export const Manager = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 24px;
`;

export const Divider = styled.View`
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_light};
  margin: 12px 0;
`;

export const Footer = styled.Text`
`;
