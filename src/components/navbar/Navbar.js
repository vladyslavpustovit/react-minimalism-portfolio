import NavContacts from "./NavContacts";
import { BREAKPOINTS } from "../../constants/breakpoints";

const Navbar = ({ fullpageApiRef, windowSize }) => {
  return (
    <div className="fixed top-0 z-10 w-full border-opacity-50">
      <div className="px-8 md:px-24 lg:px-32 w-full py-6 md:py-4">
        {windowSize.width >= BREAKPOINTS.md ? (
          <ul className="flex items-center">
            <li>
              <NavContacts fullpageApiRef={fullpageApiRef} />
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
        ) : (
          <span>Logo</span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
