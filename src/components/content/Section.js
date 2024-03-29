import {motion} from 'framer-motion'

export const Section = (props) => {
    const {children, sectionStyles} = props;
    return (
        <section className={`section ${sectionStyles ?? ''}`}>
            <motion.div className='h-full px-8 md:px-12 lg:px-32 py-6 md:py-0 container overflow-hidden'
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
            </motion.div>
        </section>
    )
}