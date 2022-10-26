import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import { HeaderContainer } from '../styles/Header'
import Dropdown from './Dropdown'
import { useState } from 'react'

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <HeaderContainer>
            <img src={logo} alt="logo of Shortly"></img>
            <button onClick={() => setOpen(prev => !prev)}>
                <img src={hamburger}></img>
            </button>
            <Dropdown isOpen={open} />
        </HeaderContainer>
    )
}