import {Skills} from "./Skills";
import {Languages} from "./Languages";
import {Section} from "../../content/Section";
import {motion} from 'framer-motion'

export const SkillsSection = () => {
    return(
        <Section>
            <motion.div whileInView={'visible'}>
                <Skills/>
                <Languages/>
            </motion.div>
        </Section>
    )
}