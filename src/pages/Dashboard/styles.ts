import {EyeOff} from 'react-native-feather';
import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const IndiceCards = styled.ScrollView.attrs({
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

export const Wrapper = styled.View`
  background-color: #fff;
  padding: 16px;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
`;

export const BaseTitleWrapper = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #909090;
`;

export const WrapperTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #404040;
  margin-bottom: 12px;
`;
