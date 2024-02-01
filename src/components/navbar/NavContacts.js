import {socialIcons} from "../../data/social-icons";
import {FullpageContext} from "@ap.cx/react-fullpage";
import {motion} from "framer-motion";

const NavContacts = () => {
    return(
        <div>
            <ul className='flex space-x-2 md:space-x-4 items-center'>
                {
                    socialIcons.map((icon, index)=>(
                        <li key={index}>
                            <a href={icon.url} target="_blank" rel="noopener noreferrer">
                                <img className='w-[24px] lg:w-[36px] 2xl:w-full focus-shadow' src={icon.iconPath}/>
                            </a>
                        </li>
                    ))
                }
                <li className='md:pl-6'>
                    <FullpageContext.Consumer>
                        {
                            ctx => (
                                <button onClick={() => {
                                    ctx.goto(ctx.slides[ctx.slides.length - 1], true)
                                }} className='md:text-2xl hover:underline'>Contact Me</button>
                            )
                        }
                    </FullpageContext.Consumer>
                </li>
            </ul>
        </div>
    )
}

export default NavContacts;