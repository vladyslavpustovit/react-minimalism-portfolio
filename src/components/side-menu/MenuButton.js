export const MenuButton = (props) => {
    const {label, activeSection, sectionId} = props;
    const scrollToSection = sectionId => {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
    return (
        <li onClick={() => scrollToSection(sectionId)} className={`list-none text-2xl font-bold cursor-pointer hover:text-indigo-600 transition-colors select-none ${activeSection === sectionId ? 'text-indigo-600' : ''}`}>
            {label}
        </li>
    )
}
