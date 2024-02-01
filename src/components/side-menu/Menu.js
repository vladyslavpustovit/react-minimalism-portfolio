import {MenuButton} from "./MenuButton";

const menuItems = [
    { label: 'About', pageNumber: 0 },
    { label: 'Skills', pageNumber: 1 },
    { label: 'Experience', pageNumber: 2 },
    { label: 'Contact me', pageNumber: 3 }
];

export const Menu = (props) => {
    const {menuOpened, setMenuOpened} = props;
    return (
        <>
            <button className='z-20 fixed top-4 right-4 md:right-8 p-3 bg-indigo-600 w-11 h-11 rounded-md'
                    onClick={() => setMenuOpened(!menuOpened)}>
                <div className={`bg-white h-0.5 rounded-md w-full transition-all
                     ${menuOpened ? "rotate-45 translate-y-0.5" : ""}
                `}/>
                <div className={`bg-white h-0.5 rounded-md w-full my-1
                     ${menuOpened ? "hidden" : ""}
                `}/>
                <div className={`bg-white h-0.5 rounded-md w-full transition-all
                     ${menuOpened ? "-rotate-45" : ""}
                `}/>
            </button>
            <div className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
                 ${menuOpened ? "w-60 md:w-80" : "w-0"}`}>
                <div className='flex flex-col flex-1 items-start justify-center gap-6 p-8'>
                    {menuItems.map((item) => (
                        <MenuButton
                            key={item.pageNumber}
                            label={item.label}
                            pageNumber={item.pageNumber}
                            setMenuOpened={setMenuOpened}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}