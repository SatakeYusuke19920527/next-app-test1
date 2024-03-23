import React from 'react';
import { FaRegCheckSquare, FaTasks } from 'react-icons/fa';
// import { , FaRegClock, FaTasks } from 'react-icons/fa';
// import { IoMdLogIn } from 'react-icons/io';
import NavItem from './NavItem/NavItem';

interface NavItemType {
  id: number;
  label: string;
  link: string;
  icon: React.ReactNode;
}

const NavList = () => {
  const navList: NavItemType[] = [
    {
      id: 1,
      label: 'Main',
      link: '/',
      icon: <FaTasks className="size-5" />,
    },
    {
      id: 2,
      label: 'Auth',
      link: '/auth',
      icon: <FaRegCheckSquare className="size-5" />,
    },
    // {
    //   id: 3,
    //   label: 'Expired Tasks',
    //   link: '/expired',
    //   icon: <FaRegClock className="size-5" />,
    // },
    // {
    //   id: 4,
    //   label: 'Auth Page',
    //   link: '/login',
    //   icon: <IoMdLogIn className="size-5" />,
    // },
  ];
  return (
    <div className="mt-24">
      {navList.map((navItem) => {
        return (
          <NavItem
            label={navItem.label}
            link={navItem.link}
            icon={navItem.icon}
            key={navItem.id}
          />
        );
      })}
    </div>
  );
};

export default NavList;
