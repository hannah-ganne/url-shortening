import { HeroContainer, HeroColumn } from "../styles/Hero"
import heroImg from '../assets/illustration-working.svg'
import Button from './Button'

export default function Hero() {
    return (
        <HeroContainer>
            <img src={heroImg} alt="person working at a deak" />
            <HeroColumn>
                <h1>
                    More than just shorter links
                </h1>
                <p>
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <Button label="Get Started" shape="round" />
            </HeroColumn>
        </HeroContainer>
    )
}