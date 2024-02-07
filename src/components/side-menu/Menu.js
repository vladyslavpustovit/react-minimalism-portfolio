import { MenuButton } from "./MenuButton";
import {BREAKPOINTS} from "../../constants/breakpoints";
import NavContacts from "../navbar/NavContacts";

const menuItems = [
  { label: "About", anchor: "about" },
  { label: "Skills", anchor: "skills" },
  { label: "Experience", anchor: "experience" },
  { label: "Contact me", anchor: "contact" },
];

export const Menu = (props) => {
  const { fullpageApiRef, windowSize, menuOpened, setMenuOpened } = props;
  return (
    <>
      <button
        className="z-20 fixed top-4 right-4 md:right-8 p-3 bg-indigo-600 w-11 h-11 rounded-md focus-shadow"
        onClick={() => setMenuOpened(!menuOpened)}
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all
                     ${menuOpened ? "rotate-45 translate-y-0.5" : ""}
                `}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1
                     ${menuOpened ? "hidden" : ""}
                `}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all
                     ${menuOpened ? "-rotate-45" : ""}
                `}
        />
      </button>
      <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
           ${menuOpened ? "w-full md:w-80 border-l border-gray-300 border-opacity-50" : "w-0"}`}>
        <div className="flex flex-col flex-1 items-center md:items-start justify-center gap-6 p-8">
          {menuItems.map((item, index) => (
            <MenuButton
              fullpageApiRef={fullpageApiRef}
              key={index}
              label={item.label}
              pageAnchor={item.anchor}
              setMenuOpened={setMenuOpened}
            />
          ))}
        </div>
          {windowSize.width <= BREAKPOINTS.md && (
              <div className='h-1/4 w-full flex flex-col items-center'>
                <NavContacts fullpageApiRef={fullpageApiRef} />
                <hr className='w-1/2 my-3'/>
                <span>Vladyslav Pustovit</span>
              </div>
          )}
      </div>
    </>
  );
};
