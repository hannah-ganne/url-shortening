import { ReactHTMLElement } from 'react'
import { A, Li, Ul } from '../styles/GlobalStyle'

export interface Props {
    link: string
    label: string | JSX.Element
}

export default function ListItem(props: Props) {
    return (
        <Li>
            <A href={props.link}>
                {props.label}
            </A>
        </Li>
    )
}