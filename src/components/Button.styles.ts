import styled from "styled-components";

export type ButtonVariants = 'primary' | 'secondary' | 'danger' | 'sucess';

interface ButtonContainerProps {
    variant: ButtonVariants;
}

const buttonVariants = {
    primary: 'yellow',
    secondary: 'orange',
    danger: 'red',
    sucess: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    border-radius: 4px;
    border: 0;
    margin: 8px;


    background-color: ${props => props.theme.primary}
`