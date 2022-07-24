import styled from 'styled-components/native';
import {EyeOff} from 'react-native-feather';
import {RFValue} from 'react-native-responsive-fontsize';

export const Cards = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
})`
  margin-bottom: 24px;
`;

export const Container = styled.View`
  padding: 24px 24px 0 24px;
  background-color: #fefefe;
`;

export const Content = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Icon = styled(EyeOff)`
  font-size: ${RFValue(24)}px;
  color: #404040;
`;

export const BaseTitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #4e4e4e;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #404040;
  font-weight: 900;
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: '#404040';
  margin-bottom: 8px;
  color: #404040;
`;
