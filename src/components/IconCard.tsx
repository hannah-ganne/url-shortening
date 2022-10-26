import { CardContainer, IconContainer } from '../styles/IconCard'

export interface Props {
    title: string
    description: string
    icon: string
}

export default function IconCard(props: Props) {
    return (
        <CardContainer>
            <IconContainer>
                <img src={props.icon} alt={`icon for ${props.title}`} />
            </IconContainer>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </CardContainer>
    )
}