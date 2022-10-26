import { ReactHTMLElement } from 'react'
import { A, Li, Ul } from '../styles/GlobalStyle'

export interface Props {
    link?: string
    label: string | JSX.Element
}

export default function ListItem(props: Props) {
    return (
        <Li>
            {props.link ? <A href={props.link}>{props.label}</A> : props.label }     
        </Li>
    )
}