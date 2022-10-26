import { FooterContainer } from '../styles/Footer'
import logo from '../assets/logo.svg'
import { Ul } from '../styles/GlobalStyle'
import NavList from './NavList'
import ListItem from './ListItem'
import facebook from '../assets/icon-facebook.svg'
import twitter from '../assets/icon-twitter.svg'
import pinterest from '../assets/icon-pinterest.svg'
import instagram from '../assets/icon-instagram.svg'

export default function Footer() {
    return (
        <FooterContainer>
            <img src={logo} alt="logo of Shortly" />
            <Ul direction="column" className="footer-list">
                <NavList
                    title="Features"
                    data={[
                        { link: "#", label: "Link Shortening" },
                        { link: "#", label: "Branded Links" },
                        { link: "#", label: "Analytics" }
                    ]}
                />
                <NavList
                    title="Resources"
                    data={[
                        { link: "#", label: "Blog" },
                        { link: "#", label: "Developers" },
                        { link: "#", label: "Support" }
                    ]}
                />
                <NavList
                    title="Company"
                    data={[
                        { link: "#", label: "About" },
                        { link: "#", label: "Out Team" },
                        { link: "#", label: "Careers" },
                        { link: "#", label: "Contact" }
                    ]}
                />
                <Ul direction="row" className="icons">
                    <ListItem link="#" label={<img src={facebook} alt="facebook icon" />} />
                    <ListItem link="#" label={<img src={twitter} alt="twitter icon" />} />
                    <ListItem link="#" label={<img src={pinterest} alt="pinterest icon" />} />
                    <ListItem link="#" label={<img src={instagram} alt="instagram icon" />} />
                </Ul>
            </Ul>
        </FooterContainer>
    )
}