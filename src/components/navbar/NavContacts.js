import { socialIcons } from "../../data/social-icons";

const NavContacts = ({ fullpageApiRef }) => {
  return (
    <div>
      <ul className="flex space-x-2 md:space-x-4 items-center">
        {socialIcons.map((icon, index) => (
          <li key={index}>
            <a href={icon.url} target="_blank" rel="noopener noreferrer">
              <img
                className="w-[30px] lg:w-[36px] 2xl:w-full focus-shadow"
                src={icon.iconPath}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavContacts;
