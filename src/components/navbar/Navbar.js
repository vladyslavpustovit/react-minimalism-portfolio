import NavContacts from "./NavContacts";
const Navbar = () => {
    return (
        <div className='px-8 md:px-24 lg:px-32 fixed top-0 w-full py-6 md:py-4 z-10'>
            <ul className='flex items-center justify-between'>
                <li>
                    <NavContacts/>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;