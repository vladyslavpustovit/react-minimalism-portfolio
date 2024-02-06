import {motion} from 'framer-motion'
import {FullpageSection} from "@ap.cx/react-fullpage";

export const Section = (props) => {
    const {children, sectionStyles} = props;
    return (
        <FullpageSection className={`section-scroll-wrapper h-screen ${sectionStyles ?? ''}`}>
            <motion.section className='h-full px-8 md:px-24 lg:px-32 overflow-hidden flex flex-col items-start justify-center'
                            initial={{
                                opacity: 0,
                                y: 50
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                    delay: 0.6
                                }
                            }}
            >
                {children}
            </motion.section>
        </FullpageSection>
    )
}