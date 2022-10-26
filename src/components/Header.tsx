import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import { HeaderContainer } from '../styles/Header'
import Dropdown from './Dropdown'
import { useState } from 'react'
import { Nav, Ul } from '../styles/GlobalStyle'
import ListItem from './ListItem'
import Button from './Button'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <HeaderContainer>
            <img src={logo} alt="logo of Shortly"></img>
            <button className="hamburger" onClick={() => setOpen(prev => !prev)}>
                <img src={hamburger}></img>
            </button>
            <Dropdown isOpen={open} />
            <Nav className="desktop-nav">
                <Ul direction="row">
                    <ListItem link="#" label="Features" />
                    <ListItem link="#" label="Pricing" />
                    <ListItem link="#" label="Resources" />
                </Ul>
                <Ul direction="row">
                    <ListItem link="#" label="Login" />
                    <ListItem label={<Button label="Sign Up" shape="round" />} />
                </Ul>
            </Nav>
        </HeaderContainer>
    )
}