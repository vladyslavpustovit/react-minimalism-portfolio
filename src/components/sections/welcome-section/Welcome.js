import {Section} from "../../content/Section";

const Welcome = () => {
    return (
        <Section>
            <div className='grid md:grid-cols-2 w-full gap-12'>
                <div>
                    <div>
                        <h1 className='text-5xl md:text-8xl md:leading-snug'>Hello there!</h1>
                        <h2 className='text-4xl md:text-7xl'>I am <span style={{color: "#04516A"}}>Vlad</span></h2>
                    </div>

                    <div className='mt-6 md:mt-12'>
                        <h3 className='text-2xl md:text-4xl md:leading-snug'>Web Developer</h3>
                        <p className='md:text-xl jura-light'>fueled by a passion for crafting digital experiences</p>
                    </div>
                    <div className='mt-8 md:mt-16 lg:mt-24'>
                        <button className='lg:text-lg 2xl:text-xl rounded-full py-3 md:py-4 px-10 md:px-16 2xl:px-24 shadow-xl' style={{backgroundColor: '#D1F3FF'}}>Explore my work</button>
                    </div>
                </div>
                <div className="flex justify-center items-center relative">
                    <img src='/assets/Vector.svg'/>
                    <img className="absolute inset-0 m-auto" src='/assets/lotty.gif'/>
                </div>
            </div>
        </Section>
    )
}

export default Welcome;