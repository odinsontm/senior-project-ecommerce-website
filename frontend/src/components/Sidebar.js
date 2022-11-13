import React, { useState } from 'react';
import styled from 'styled-components';
import menulogo from '../pics/menu.svg';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import Submenu from './Submenu';

const SidebarNav = styled.nav`
  background: rgba(17,17,17,0.8);
  width 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 3.8rem;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div>
        <Link to="#">
          <img src={menulogo} alt="menu" onClick={showSidebar} />
        </Link>
      </div>

      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
          {SidebarData.map((item, index) => {
            return <Submenu item={item} key={index} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};

export default Sidebar;
