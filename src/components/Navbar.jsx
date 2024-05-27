import React, { useState } from 'react'
import Logo from '../assets/images/Logo.svg'
import { BsCart2 } from 'react-icons/bs'
import { HiOutlineBars3 } from 'react-icons/hi2'
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
// import icon
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import CommentRoundedIcon from '@mui/icons-material/CommentRounded'
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: 'Home',
      textTg:'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'About',
      textTg:'About',
      icon: <InfoIcon />,
    },
    {
      text: 'Testimonials',
      textTg:'Testimonials',
      icon: <CommentRoundedIcon />,
    },
    {
      text: 'Contact',
      textTg:'Contact',
      icon: <PhoneRoundedIcon />,
    },
    {
      text: <BsCart2 className="navbar-cart-icon" />,
      textTg:'Cart',
      icon: <ShoppingCartRoundedIcon />
    },
  ]

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="navbar-links-container">
        {menuOptions.map((item) => (
          <a key={item.text} href={`#${item.text}`}>
          {item.text}
        </a>
        ))}
        <button>Bookings Now</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="present"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItemButton key={item.text}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.textTg} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
