import { MenuButton } from "./MenuButton";
import {BREAKPOINTS} from "../../constants/breakpoints";
import NavContacts from "../navbar/NavContacts";
import {useEffect, useRef, useState} from "react";

const menuItems = [
  { label: "About", anchor: "about" },
  { label: "Skills", anchor: "skills" },
  { label: "Experience", anchor: "experience" },
  { label: "Contact me", anchor: "contact" },
];

export const Menu = (props) => {
  const { fullpageApiRef, windowSize, menuOpened, setMenuOpened } = props;
  const [menuSize, setMenuSize] = useState('0')
  const buttonRef = useRef(null);

    useEffect(() => {
        if (buttonRef.current && windowSize.width) {
            const buttonRect = buttonRef.current.getBoundingClientRect();
            const menuWidthOffset = 50;

            const calcMenuWidth =
                windowSize.width <= BREAKPOINTS.md
                    ? '100%'
                    : windowSize.width - buttonRect.x <= 150
                        ? '20rem'
                        : `${Math.round(windowSize.width - buttonRect.x) + menuWidthOffset}px`;

            setMenuSize(calcMenuWidth);
        }
    }, [windowSize.width]);

    return (
    <div className='pointer-events-auto'>
      <button
        ref={buttonRef}
        className="z-20 absolute top-3 right-3 md:right-8 p-3 bg-indigo-600 w-11 h-11 rounded-md focus-shadow"
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
      <div style={{ width: menuOpened ? menuSize : 0 }}
           className={`fixed z-10 top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col border-opacity-50`}>
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
    </div>
  );
};
