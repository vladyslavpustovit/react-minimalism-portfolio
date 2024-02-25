import {languages} from "../../../data/languages";
import {motion} from 'framer-motion'

export const Languages = () => {
    return(
        <div className='w-full flex flex-col items-center md:items-start mt-8 md:mt-4'>
            <h2 className='text-3xl md:text-[2.5rem] font-bold'>Languages:</h2>
            <div className='mt-6 md:mt-8 w-full max-w-2xl space-y-4 flex flex-col items-center md:items-start'>
                {
                    languages.map((language, index) => (
                        <div className='w-full max-w-xs' key={index}>
                            <h3 className='text-lg md:text-xl font-bold text-gray-800'>{language.title}</h3>
                            <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                                <motion.div className='h-full bg-indigo-500 rounded-full'
                                            style={{width: `${language.level}%`}}
                                            initial={{
                                                scaleX: 0,
                                                originX: 0,
                                            }}
                                            variants={{
                                                visible: {
                                                    scaleX: 1,
                                                    transition: {
                                                        duration: 1,
                                                        delay: 1
                                                    }
                                                }
                                            }}>
                                </motion.div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}