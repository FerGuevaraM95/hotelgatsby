import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;
  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const NavLink = styled(Link)`
font-family: 'PT Sans', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  text-decoration: none;
  padding: 1rem;
  margin-right: 1rem;
  color: #FFF;

  &:last-of-type {
    margin-right: 0;
  }
  &.current-page {
    border-bottom: 2px solid #FFF;
  }
`;

const Navigation = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="current-page">
        Inicio
      </NavLink>
      <NavLink to={"/nosotros"} activeClassName="current-page">
        Nosotros
      </NavLink>
    </Nav>
  )
}
 
export default Navigation;