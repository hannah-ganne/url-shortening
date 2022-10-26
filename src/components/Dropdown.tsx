import { DropdownContainer } from '../styles/Dropdown'
import NavList from './NavList'
import Button from './Button'

export interface Props {
    isOpen: boolean
}

export default function Dropdown(props: Props) {
    return (
        <DropdownContainer isOpen={props.isOpen}>
            <NavList
                data={[
                    { link: "#", label: "Features"},
                    { link: "#", label: "Pricing"},
                    { link: "#", label: "Resources"},
                ]}
            />
            <div className="divider" />
            <NavList
                data={[
                    { link: "#", label: "Login" },
                    { label: <Button label="Sign Up" shape="round" />}
                ]}
            />
        </DropdownContainer>
    )
}