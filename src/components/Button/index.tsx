import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import {
    CustomButton,
    ButtonText,
} from './styles';

interface Props extends TouchableOpacityProps {
    type: 'default' | 'link' | 'disabled';
    title: string;
}

export function Button({ type, title, ...rest }: Props) {
    return (
        <CustomButton type={type} {...rest}>
            <ButtonText type={type}>{title}</ButtonText>
        </CustomButton>
    )
}