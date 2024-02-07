import NavContacts from "./NavContacts";
import { BREAKPOINTS } from "../../constants/breakpoints";

const Navbar = ({ fullpageApiRef, windowSize }) => {
  if (windowSize.width >= BREAKPOINTS.md) {
    return (
        <div className="fixed top-0 z-10 w-full">
          <div className="px-12 lg:px-32 w-full py-6 md:py-4">
            <ul className="flex items-center">
              <li>
                <NavContacts fullpageApiRef={fullpageApiRef}/>
              </li>
              <li className="md:pl-6">
                <button
                    onClick={() => {
                      fullpageApiRef.current.moveTo("contact");
                    }}
                    className="md:text-2xl hover:underline"
                >
                  Contact Me
                </button>
              </li>
            </ul>
          </div>
        </div>
    )
  } else {
    return <img alt="logo" src="/assets/logo.png" className="fixed top-3 left-3 w-11"/>
  }
};

export default Navbar;
