import {socialIcons} from "../../data/social-icons";

const NavContacts = () => {
    return(
        <div>
            <ul className='flex space-x-2 md:space-x-4 items-center'>
                {
                    socialIcons.map((icon, index)=>(
                        <li key={index}>
                            <a href={icon.url}>
                                <img className='w-[24px] lg:w-[36px] 2xl:w-full focus-shadow' src={icon.iconPath}/>
                            </a>
                        </li>
                    ))
                }
                <li className='md:pl-6'>
                   <a href='#' className='md:text-2xl hover:underline'>Contact Me</a>
                </li>
            </ul>
        </div>
    )
}

export default NavContacts;