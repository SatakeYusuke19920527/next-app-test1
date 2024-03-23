import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className='flex h-screen'>
        <SideMenu />
        <main className="bg-slate-50 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
