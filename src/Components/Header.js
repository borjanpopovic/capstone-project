import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function Header({ isStatic }) {
  return <Headline isStatic={isStatic}>FAV MAP</Headline>;
}

const Headline = styled.h1`
  //background-image: linear-gradient(#ff0f7b, #f89b29);
  background: var(--primary);
  box-shadow: 0 2px 0.75rem hsla(213, 52%, 20%, 0.2);
  color: var(--border-dark);
  left: 0;
  margin: 0;
  padding: 1rem;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  right: 0;
  text-align: center;
  top: 0;
  z-index: 1000;
`;
