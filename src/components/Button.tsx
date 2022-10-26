import { ButtonContainer } from "../styles/Button"

export interface Props {
    label: string
    shape: string
    onClick?: any
    isCopied?: boolean | undefined
}

export default function Button(props: Props) {
    return (
        <ButtonContainer
            onClick={props.onClick}
            shape={props.shape}
            isCopied={props.isCopied}
        >
            {props.isCopied? 'Copied!' : props.label}
        </ButtonContainer>
    )
}