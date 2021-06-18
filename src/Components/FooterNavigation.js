import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import formicon from '../assets/form-icon.svg';
import listicon from '../assets/list-icon.svg';
import mapicon from '../assets/map-icon.svg';

export default function FooterNavigation({ isStatic }) {
  return (
    <Nav isStatic={isStatic}>
      <NavBox>
        <NavLinkStyled exact to="/" activeClassName="active" className="link">
          <img src={formicon} alt="formicon" />
        </NavLinkStyled>
        <NavLinkStyled
          to="/location-list"
          activeClassName="active"
          className="link"
        >
          <img src={listicon} alt="listicon" />
        </NavLinkStyled>
        <NavLinkStyled to="/map" activeClassName="active" className="link">
          <img src={mapicon} alt="mapicon" />
        </NavLinkStyled>
      </NavBox>
    </Nav>
  );
}

const Nav = styled.nav`
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  background: transparent;
  bottom: 0;
  padding: 1.25rem;
  width: 100%;
`;

const NavBox = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 0.375rem;
  color: transparent;
  display: flex;
  height: 2.75rem;
  justify-content: space-evenly;
  z-index: 1000;
  .active {
    background: var(--secondary);
    opacity: 0.9;
  }
`;

const NavLinkStyled = styled(NavLink)`
  //border: 0.031rem solid var(--border-dark);

  background: transparent;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  border-radius: 3rem;
  border: 0.15rem solid var(--red);
  color: transparent;
  display: inline-flex;
  opacity: 0.5;
  padding: 12px 14px 10px 14px;
  text-decoration: none;

  /* :hover {
    background: var(--secondary);
  } */

  img:hover {
    background: var(--secondary);
    /* border-radius: 3rem; */
  }
`;
