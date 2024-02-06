import { socialIcons } from "../../data/social-icons";

const NavContacts = ({ fullpageApiRef }) => {
  return (
    <div>
      <ul className="flex space-x-2 md:space-x-4 items-center">
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <a href={icon.url} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[24px] lg:w-[36px] 2xl:w-full focus-shadow"
                src={icon.iconPath}
              />
            </a>
          </li>
        ))}
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
  );
};

export default NavContacts;
