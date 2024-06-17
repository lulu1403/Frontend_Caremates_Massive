import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>CAREMATES</div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>
      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${isActive('/admindashboard')}`}>
          <a href="/admindashboard">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className={`sidebar-list-item ${isActive('/adminlembaga')}`}>
          <a href="/adminlembaga">
            <BsFillArchiveFill className='icon' /> Lembaga
          </a>
        </li>
        <li className={`sidebar-list-item ${isActive('/pusatbantuanadmin')}`}>
          <a href="/pusatbantuanadmin">
            <BsFillGrid3X3GapFill className='icon' /> Pusat Bantuan
          </a>
        </li>
        <li className={`sidebar-list-item ${isActive('/dataadmin')}`}>
          <a href="/dataadmin">
            <BsPeopleFill className='icon' /> Admin
          </a>
        </li>
        <li className={`sidebar-list-item ${isActive('/notifpage')}`}>
          <a href="/notifpage">
            <BsListCheck className='icon' /> Notifikasi
          </a>
        </li>
        <li className={`sidebar-list-item ${isActive('/transaksipage')}`}>
          <a href="/transaksipage">
            <BsMenuButtonWideFill className='icon' /> Transaksi
          </a>
        </li>
        <li className={`sidebar-list-item`}>
          <a href="/loginadmin">
            <BsFillGearFill className='icon' /> Logout
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
