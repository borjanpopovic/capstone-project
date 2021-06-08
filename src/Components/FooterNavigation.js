import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import formicon from '../assets/form-icon.svg';
import listicon from '../assets/list-icon.svg';
import mapicon from '../assets/map-icon.svg';

export default function FooterNavigation({ isStatic }) {
  return (
    <Nav isStatic={isStatic}>
      <NavBox>
        <NavLinkStyled activeClassName="active" exact to="/" className="link">
          <img src={formicon} alt="formicon" />
        </NavLinkStyled>
        <NavLinkStyled
          activeClassName="active"
          to="/location-list"
          className="link"
        >
          <img src={listicon} alt="listicon" />
        </NavLinkStyled>
        <NavLinkStyled activeClassName="active" to="/map" className="link">
          <img src={mapicon} alt="mapicon" />
        </NavLinkStyled>
      </NavBox>
    </Nav>
  );
}

const Nav = styled.nav`
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  bottom: 0;
  padding: 1.25rem;
  width: 100%;
  z-index: 100;
`;

const NavBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--primary);
  border-radius: 0.375rem;
  color: transparent;
  height: 2.75rem;
`;

const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  //border: 0.031rem solid var(--border-dark);
  box-shadow: 0 2px 0.75rem hsla(213, 52%, 20%, 0.2);
  border-radius: 3rem;
  padding: 12px 14px 10px 14px;
  text-decoration: none;
  background: transparent;

  color: transparent;
  :hover {
    background: var(--secondary);
  }

  .active {
    opacity: 0.5;
  }
`;
