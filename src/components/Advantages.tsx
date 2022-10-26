import { Section } from '../styles/Advantages'
import IconCard from "./IconCard"
import recognition from '../assets/icon-brand-recognition.svg'
import records from '../assets/icon-detailed-records.svg'
import customizable from '../assets/icon-fully-customizable.svg'

export default function Advantages() {
    return (
        <Section>
            <h2>
                Advanced Statistics
            </h2>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <IconCard
                title="Brand Recognition"
                description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
                icon={recognition}
            />
            <IconCard
                title="Detailed Records"
                description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                icon={records}
            />
            <IconCard
                title="Fully Customizable"
                description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                icon={customizable}
            />
            <div className="cyan-line" />
        </Section>
    )
}