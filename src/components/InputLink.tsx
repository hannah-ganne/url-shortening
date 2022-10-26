import { useState } from 'react'
import { Wrapper, InputContainer, Input } from '../styles/InputLink'
import Button from './Button'
import LinkContainer from './LinkContainer'

export default function InputLink() {
    const [link, setLink] = useState('')
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [shortLink, setShortLink] = useState('')

    console.log(link)

    const handleSubmit = () => {
        if (link === '') {
            setError(true)
            setIsLoading(true)
        } else {
            fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
            .then(res => res.json())
            .then(data => {
                setError(false)
                setShortLink(data.result.short_link)
                setIsLoading(false)
            })
        }
    }

    return (
        <Wrapper>
            <InputContainer hasError={error}>
                <div>
                    <Input
                        placeholder="Shorten a link here..."
                        value={link}
                        onChange={(e) => setLink(e.target.value)}
                        hasError={error}
                        onFocus={() => {
                            setLink('')
                            setIsLoading(true)
                        }}
                    />
                    {error && <small>Please add a link</small>}
                </div>
                <Button
                    label="Shorten It!"
                    shape=""
                    onClick={handleSubmit}
                />
            </InputContainer>
            {(!error && !isLoading) && <LinkContainer link={link} shortLink={shortLink} /> }
        </Wrapper>
    )
}