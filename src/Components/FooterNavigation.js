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
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: transparent;
  //background-color: var(--primary);
  border-radius: 0.375rem;
  color: transparent;
  height: 2.75rem;
  z-index: 1000;
  .active {
    opacity: 0.9;
  }
`;

const NavLinkStyled = styled(NavLink)`
  display: inline-flex;
  //border: 0.031rem solid var(--border-dark);
  background: var(--primary);
  box-shadow: 0 2px 0.75rem hsla(213, 52%, 20%, 0.2);
  border-radius: 3rem;
  border: 0.3rem solid var(--red);
  padding: 12px 14px 10px 14px;
  text-decoration: none;
  background: transparent;
  color: transparent;
  opacity: 0.5;

  :hover {
    background: var(--secondary);
  }

  img:hover {
    background: var(--secondary);
    border-radius: 3rem;
  }
`;
