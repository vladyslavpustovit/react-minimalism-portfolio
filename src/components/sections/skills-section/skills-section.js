import {Skills} from "./Skills";
import {Languages} from "./Languages";
import {Section} from "../../content/Section";
import {motion} from 'framer-motion'

export const SkillsSection = () => {
    return(
        <Section sectionStyles={'bg-blue-50'}>
            <motion.div whileInView={'visible'} className='flex flex-col justify-center w-full h-full pb-16 md:pb-0'>
                <Skills/>
                <Languages/>
            </motion.div>
        </Section>
    )
}