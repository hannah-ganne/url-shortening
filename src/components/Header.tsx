import logo from '../assets/logo.svg'
import hamburger from '../assets/hamburger.svg'
import { HeaderContainer } from '../styles/Header'

export default function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="logo of Shortly"></img>
            <button>
                <img src={hamburger}></img>
            </button>
        </HeaderContainer>
    )
}