import styled, {css} from "styled-components/native";

interface Props {
  type: "default" | "link";
}

export const CustomButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})<Props>`

  padding: 16px 24px;
  align-items: center;
  border-radius: 4px;

  ${(props) => props.type === 'default' && css `
  background-color: ${({ theme }) => theme.colors.primary_dark};
  `}

  ${(props) => props.type === 'link' && css `
  align-items: flex-end;
  padding: 0;
  margin-bottom: 8px;
  `}
`;

export const ButtonText = styled.Text<Props>`
  color: ${({ theme }) => theme.colors.white};
  font-size: 14px;
  font-weight: 600;

  ${(props) => props.type === 'link' && css `
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary_dark};
  `}
`;
