import {Section} from "../../content/Section";

const Welcome = () => {
    return (
        <Section sectionStyles={'gradient-main'}>
            <div className='grid md:grid-cols-2 items-center w-full h-full'>
                <div>
                    <div>
                        <h1 className='text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl md:leading-snug'>Hello there!</h1>
                        <h2 className='text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>I am <span style={{color: "#04516A"}}>Vlad</span></h2>
                    </div>

                    <div className='mt-6 md:mt-9 lg:mt-12'>
                        <h3 className='text-2xl lg:text-3xl xl:text-4xl md:leading-snug'>Web Developer</h3>
                        <p className='lg:text-xl jura-light'>fueled by a passion for crafting digital experiences</p>
                    </div>
                    <div className='mt-8 md:mt-16 lg:mt-24'>
                        <button style={{backgroundColor: '#D1F3FF'}}
                            className='lg:text-lg 2xl:text-xl rounded-full py-3 md:py-4 px-10 md:px-16 2xl:px-24 shadow-lg'>
                            Explore my work
                        </button>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="flex justify-center items-center relative max-w-sm md:max-w-full">
                        <img alt='Cloud' src='/assets/Vector.svg'/>
                        <img alt='Lotty' className="absolute inset-0 m-auto" src='/assets/lotty.gif'/>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Welcome;