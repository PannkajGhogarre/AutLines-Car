import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItemData = [
  { title: 'Home', linked: '/' },
  { title: 'About', linked: '/about' },
  {
    title: 'Inventory',
    submenu: [
      { title: 'Inventory-Grid', linked: '/inventory-grid' },
      { title: 'Inventory-List', linked: '/inventory-list' },
      { title: 'Vehicle-Details', linked: '/vehicle-details' },
      { title: 'Booking-Auto', linked: '/booking-auto' },
    ],
    linked: '/invent',
  },
  {
    title: 'Page',
    submenu: [
      { title: 'Shop', linked: '/shop' },
      { title: 'Product Inner', linked: '/product' },
      { title: 'My Account', linked: '/account' },
      { title: 'Checkout', linked: '/checkout' },
      { title: 'Cart', linked: '/cart' },
    ],
    linked: '/page',
  },
  {
    title: 'News',
    submenu: [
      { title: 'Blog Classic', linked: '/blog-classic' },
      { title: 'Blog Grid', linked: '/blog-grid' },
    ],
    linked: '/news',
  },
  { title: 'Contacts', linked: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handleClose = () => {
    setOpenMenuIndex(null);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 md:px-10">
      <div className="w-full h-28 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="./header.png" alt="Logo" className="h-12 md:h-8" />
        </NavLink>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <img src="./list.png" alt="Menu" className="h-6" />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center">
          {MenuItemData.map((item, index) => (
            <div key={index} className="relative">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => handleClick(index)}
                    className="text-black px-4 py-2 hover:text-blue-500"
                  >
                    {item.title}
                  </button>
                  {openMenuIndex === index && (
                    <div className="absolute bg-white shadow-lg border mt-2 rounded-lg w-40">
                      {item.submenu.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.linked}
                          className="block px-4 py-2 hover:text-three"
                          onClick={handleClose}
                        >
                          {subItem.title}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={item.linked}
                  className="text-black px-4 py-2 hover:text-blue-500"
                >
                  {item.title}
                </NavLink>
              )}
            </div>
          ))}

          {/* Action Buttons */}
          <div className="flex items-center gap-4 ml-4">
            <img src="./user.png" alt="User" className="w-6" />
            <img src="./search.png" alt="Search" className="w-6" />
            <img src="./usa.png" alt="USA" className="w-6" />
            <div className="border bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
              <button className="text-white">Take A Test Drive</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-4">
            {MenuItemData.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => handleClick(index)}
                      className="text-black px-4 py-2 w-full text-left"
                    >
                      {item.title}
                    </button>
                    {openMenuIndex === index && (
                      <div className="pl-4">
                        {item.submenu.map((subItem, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={subItem.linked}
                            className="block px-4 py-2 hover:bg-gray-100"
                            onClick={toggleMenu}
                          >
                            {subItem.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.linked}
                    className="block hover:bg-gray-100 py-2 px-3 rounded"
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </NavLink>
                )}
              </div>
            ))}
          </ul>

          {/* Icons for mobile */}
          <div className="flex items-center gap-4 mt-4">
            <img src="./user.png" alt="User" className="w-6" />
            <img src="./search.png" alt="Search" className="w-6" />
            <img src="./usa.png" alt="USA" className="w-6" />
          </div>

          {/* Mobile "Take A Test Drive" Button */}
          <div className="border bg-blue-500 px-4 py-2 mt-4 rounded hover:bg-blue-600">
            <button className="text-white">Take A Test Drive</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
