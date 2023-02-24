import { ButtonContainer, ButtonVariants } from "./Button.styles";

interface variantProps {
    variant?: ButtonVariants;
}

export function Button({ variant = 'sucess' }: variantProps) {
    return (
        <ButtonContainer variant={variant}>txt</ButtonContainer>
    )
}