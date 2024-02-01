import {motion} from "framer-motion";
import {scrollToSection} from "../../utils/scroll-to-section";

export const ScrollTopButton = () => {
        return (
            <motion.div
                className='cursor-pointer z-20 fixed bottom-4 right-4 md:right-8'
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.3
                    }
                }}>
                <img onClick={() => scrollToSection('welcome')} className='w-14' src='/assets/up-arrow.svg'/>
            </motion.div>
        )
}
