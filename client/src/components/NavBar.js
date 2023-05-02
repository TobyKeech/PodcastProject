import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../App.css";

const NavBar = () => {
  return (
    <SidenavDiv>
      <nav>
        <SidenavUl>
          <SidenavLi>
            <NavLink to="/">Home</NavLink>
            {/* Home will bring up search bar  */}
          </SidenavLi>
          <SidenavLi>
            <NavLink to="/favourites">Favourites</NavLink>
          </SidenavLi>
          <SidenavLi>
            <NavLink to="/queue">Queue</NavLink>
          </SidenavLi>
          <SidenavLi>
            <NavLink to="/liked">Liked</NavLink>
          </SidenavLi>
        </SidenavUl>
      </nav>
    </SidenavDiv>
  );
};

export default NavBar;
export const SidenavDiv = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  padding-top: 10px;
`;
export const SidenavUl = styled.ul`
list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;
export const SidenavLi = styled.li`
  color: black;
  padding-left: 0;
`;
