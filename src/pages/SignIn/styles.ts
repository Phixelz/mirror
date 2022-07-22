import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Wrapper = styled.View`
  margin-top: ${RFPercentage(10)}px;
`;

export const Illustration = styled.Image`
  width: ${RFValue(156)}px;
`;

export const TitleStyle = styled.Text`
  font-size: 24px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Title = styled.Text`
  font-weight: 400;
`;

export const TextInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.secondary_dark};
  border-radius: 4px;
  margin-bottom: 16px;
  padding: 12px 12px;
`;

export const DescriptionStyle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.Text`
  font-weight: 400;
`;
