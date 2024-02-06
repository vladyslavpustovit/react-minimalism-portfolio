import NavContacts from "./NavContacts";
const Navbar = ({ fullpageApiRef }) => {
  return (
    <div className="fixed top-0 z-10 w-full bg-white border-b border-gray-300 border-opacity-50">
      <div className="px-8 md:px-24 lg:px-32 w-full py-6 md:py-4">
        <ul className="flex items-center justify-between">
          <li>
            <NavContacts fullpageApiRef={fullpageApiRef} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
