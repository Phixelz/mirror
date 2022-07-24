import styled, { css } from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  type: 'default' | 'createwallet' | 'notification';
}

export const Container = styled.View<Props>`
  background-color: ${({ theme }) => theme.colors.secondary_light};
  margin-bottom: 24px;
  padding: 24px;
  border-radius: 4px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_light};

  ${(props) => props.type === 'notification' && css`
  background-color: ${({ theme }) => theme.colors.white};
 `}

 ${(props) => props.type === 'createwallet' && css`
 background-color: ${({ theme }) => theme.colors.white};
 margin-bottom: 16px;
 `}
`;

export const Title = styled.Text<Props>`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 4px;

  ${(props) => props.type === 'createwallet' && css`
  font-size: 16px;
  font-weight: 400;
  color: #909090;
 `}
`;

export const Subtitle = styled.Text<Props>`
  font-size: ${RFValue(14)}px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};

  ${(props) => props.type === 'createwallet' && css`
  font-size: 20px;
  font-weight: 700;
  color: #404040;
 `}
`;
