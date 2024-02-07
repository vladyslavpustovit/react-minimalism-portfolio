
export const MenuButton = (props) => {
    const {fullpageApiRef, label, pageAnchor, setMenuOpened} = props;
    const sectionAnchor= fullpageApiRef.current?.getActiveSection().anchor
    const handleClick = () => {
        fullpageApiRef.current.moveTo(pageAnchor)
        setMenuOpened(false)
    }

    return (
        <button className={`list-none text-2xl md:text-2xl font-bold cursor-pointer hover:text-indigo-600 hover:underline
        transition-colors select-none ${pageAnchor === sectionAnchor ? 'text-indigo-600 underline' : ''}`} onClick={handleClick}>
            {label}
        </button>
    )
}
