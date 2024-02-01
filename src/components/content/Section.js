import {motion} from 'framer-motion'
export const Section = (props) => {
    const {children} = props;
    return (
        <motion.section
            className={`
                height-dvh-full px-8 md:px-24 lg:px-32
                flex flex-col items-start justify-center overflow-hidden
            `}
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
    )
}