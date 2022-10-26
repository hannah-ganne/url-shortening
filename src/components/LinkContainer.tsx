import { useState } from 'react'
import { Container } from '../styles/LinkContainer'
import Button from './Button'

export interface Props {
    link: string
    shortLink: string
}

export default function LinkContainer(props: Props) {
    const [copied, setCopied] = useState(false)
    const handleCopy = (shortLink: string) => {
        if ('clipboard' in navigator) {
            setCopied(true)
            return navigator.clipboard.writeText(shortLink)
        }
    }

    return (
        <Container>
            <p className="link">{props.link}</p>
            <div className="divider" />
            <p className="short-link">{props.shortLink}</p>
            <Button
                label="copy"
                shape=""
                onClick={() => handleCopy(props.shortLink)}
                isCopied={copied}
            />
        </Container>
    )
}