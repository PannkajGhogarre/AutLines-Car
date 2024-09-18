import { useState } from "react";
import { NavLink } from "react-router-dom";

const Dropdown = ({ title, submenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"

    >
      {/* Parent Title */}
      <h1 className="cursor-pointer">{title}</h1>

      {/* Dropdown Menu */}
      {isOpen && (
        <select className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {submenu.map((subItem, index) => (
            <Option key={index} className="hover:bg-indigo-50">
              <NavLink
                to="/#"
                className="block px-4 py-2 text-gray-600 rounded-lg"
              >
                {subItem.title}
              </NavLink>
            </Option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Dropdown;
