import { Ul } from '../styles/GlobalStyle'
import ListItem from './ListItem'

export interface Props {
    title: string
    data: { link: string; label: string }[]
}

export default function NavList(props: Props) {
    return (
        <Ul direction="column">
        <h3>{props.title}</h3>
        {props.data.map(item => <ListItem link={item.link} label={item.label} />)}
    </Ul>
    )
}