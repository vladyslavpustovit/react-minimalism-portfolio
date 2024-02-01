import {motion} from "framer-motion";
import {FullpageContext} from "@ap.cx/react-fullpage";

export const ScrollTopButton = () => {
    return (
        <FullpageContext.Consumer>
            {
                ctx => (
                    ctx.number !== 0 && (
                        <motion.div
                            onClick={() => {
                                ctx.goto(ctx.slides[0], true)
                            }}
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
                            <img className='w-14' src='/assets/up-arrow.svg'/>
                        </motion.div>
                    )
                )
            }
        </FullpageContext.Consumer>
    )
}