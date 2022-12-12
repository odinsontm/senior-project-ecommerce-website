/**
 * The submenu component. Attaches to the sidebar
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SidebarLink = styled(Link)`
  display: flex;
  color: #dddddd;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  list-style: none;
  height: 2.5rem;
  text-decoration: none;
  font-size: 1.7rem;
  border-left: 4px solid transparent;

  &:hover {
    color: #ffffff;
    border-left: 4px solid #bead0f;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span``;

const DropdownLink = styled(Link)`
  background: rgba(217, 217, 217, 0.2);
  height: 2.5rem;
  padding-left: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #dddddd;
  font-size: 1.7rem;

  &:hover {
    color: #ffffff;
    background: rgba(190, 173, 15, 0.8);
  }
`;

const Submenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>{item.subNav && subnav ? '⌄' : item.subNav ? '⌃' : null}</div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default Submenu;
