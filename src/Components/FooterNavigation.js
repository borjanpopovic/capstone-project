import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import formicon from '../assets/form-icon.svg';
import listicon from '../assets/list-icon.svg';
import mapicon from '../assets/map-icon.svg';

FooterNavigation.propTypes = {
  isStatic: PropTypes.func,
};

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
  background: transparent;
  bottom: 0;
  padding: 1.25rem;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
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
    opacity: 0.8;
  }
`;

const NavLinkStyled = styled(NavLink)`
  background: transparent;
  border-radius: 3rem;
  border: 0.07rem solid var(--secondary-dark);
  box-shadow: 0 0.11rem 0.1rem var(--secondary-dark);
  color: transparent;
  display: inline-flex;
  opacity: 0.5;
  padding: 0.75rem 0.875rem 0.625rem 0.875rem;
  text-decoration: none;
`;
