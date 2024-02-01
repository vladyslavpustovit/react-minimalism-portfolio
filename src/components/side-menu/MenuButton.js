import {scrollToSection} from "../../utils/scroll-to-section";

export const MenuButton = (props) => {
    const {label, activeSection, sectionId, setMenuOpened} = props;
    const handleClick = () => {
        setMenuOpened(false);
        scrollToSection(sectionId);
    }

    return (
        <li onClick={handleClick} className={`list-none text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors select-none ${activeSection === sectionId ? 'text-indigo-600' : ''}`}>
            {label}
        </li>
    )
}
