import { InputContainer, Input } from '../styles/InputLink'
import Button from './Button'

export default function InputLink() {
    return (
        <InputContainer>
            <Input placeholder="Shorten a link here..." />
            <Button label="Shorten It!" shape="" />
        </InputContainer>
    )
}