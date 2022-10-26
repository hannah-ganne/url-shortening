import { ButtonContainer } from "../styles/Button"

export interface Props {
    label: string
    shape: string
}

export default function Button(props: Props) {
    return (
        <ButtonContainer shape={props.shape}>
            {props.label}
        </ButtonContainer>
    )
}