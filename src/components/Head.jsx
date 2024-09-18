import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
// import { MenuItem } from './NavLink/MenuItem';
import { AppBar, Toolbar, Menu, MenuItem, Typography, Button, Box } from '@mui/material';

const Header = () => {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenuIndex, setOpenMenuIndex] = useState(null);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setOpenMenuIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenMenuIndex(null);
  };

  const MenuItemData = [
    { title: 'Home', linked: '/' },
    { title: 'About', linked: '/about' },
    {
      title: 'Inventory',
      submenu: [
        { title: 'Inventory Grid', linked: '/inventory-grid' },
        { title: 'Inventory List', linked: '/inventory-list' },
        { title: 'Vehicle Details', linked: '/vehicle-details' },
        { title: 'Booking Auto', linked: '/booking-auto' }
      ],
      linked: '/invent'
    },
    {
      title: 'Page',
      submenu: [
        { title: 'Shop', linked: '/shop' },
        { title: 'Product', linked: '/product' },
        { title: 'My Account', linked: '/account' },
        { title: 'Checkout', linked: '/checkout' },
        { title: 'Cart', linked: '/cart' }
      ],
      linked: '/page'
    },
    {
      title: 'News',
      submenu: [
        { title: 'Blog Classic', linked: '/blog-classic' },
        { title: 'Blog Grid', linked: '/blog-grid' }
      ],
      linked: '/news'
    },
    { title: 'Contacts', linked: '/contact' }
  ];


  return (
    <nav className="bg-white border-b border-gray-200 sticky">
      <div className="w-full h-28 flex items-center justify-between px-4 md:px-10">
        <div className="flex items-center justify-between w-full">
          <img src="./header.png" alt="Logo" className="h-12 md:h-8" />
          
          <div className="md:hidden flex items-center">
            <a className="text-2xl" onClick={toggleMenu} href="#">
              <i className={isOpen ? "ri-close-line" : "ri-menu-fill"} />
            </a>
          </div>

          <div className="hidden md:flex items-center">
          <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {MenuItemData.map((item, index) => (
            <div key={index}>
              {/* If the item has a submenu, display dropdown */}
              {item.submenu ? (
                <>
                  <Button
                    onClick={(e) => handleClick(e, index)}
                    sx={{ color: 'white' }}
                    aria-controls={openMenuIndex === index ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                  >
                    {item.title}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={openMenuIndex === index}
                    onClose={handleClose}
                    MenuListProps={{ onMouseLeave: handleClose }}
                  >
                    {item.submenu.map((subItem, subIndex) => (
                      <MenuItem key={subIndex} onClick={handleClose} component={NavLink} to={subItem.linked}>
                        {subItem.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              ) : (
                // Regular link without dropdown
                <Button component={NavLink} to={item.linked} sx={{ color: 'white' }}>
                  {item.title}
                </Button>
              )}
            </div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>

            <div className="flex items-center gap-2">
              <img src="./user.png" alt="User" className="w-6" />
              <img src="./search.png" alt="Search" className="w-6" />
              <img src="./usa.png" alt="USA" className="w-6" />
              <img src="./ger.png" alt="Germany" className="w-6" />
              <img src="./france.png" alt="France" className="w-6" />
            </div>

            <div className="border bg-one px-4 py-2 hover:bg-two">
              <button>Take A Test Drive</button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden px-4 pb-4`}>
        <ul className="flex flex-col gap-4 font-serif">
          {MenuItemData.map((link, index) => (
            <NavLink
              to={link.linked}
              key={index}
              className={({ isActive }) =>
                `${isActive ? "text-two" : "hover:bg-indigo-50 text-gray-600 rounded-lg"}`
              }
              onClick={toggleMenu}
            >
              <h1>{link.title}</h1>
            </NavLink>
          ))}
        </ul>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <img src="./user.png" alt="User" className="w-6" />
          <img src="./search.png" alt="Search" className="w-6" />
          <img src="./usa.png" alt="USA" className="w-6" />
          <img src="./ger.png" alt="Germany" className="w-6" />
          <img src="./france.png" alt="France" className="w-6" />
        </div>

        <div className="border bg-one px-4 py-2 hover:bg-two mt-4">
          <button>Take A Test Drive</button>
        </div>
      </div>
    </nav>
  )
}

export default Header