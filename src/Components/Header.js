import styled from 'styled-components';

export default function Header({ isStatic }) {
  return <Headline isStatic={isStatic}>FAV MAP</Headline>;
}

const Headline = styled.h1`
  background: linear-gradient(
    to right bottom,
    hsl(105, 55%, 97%),
    hsl(105, 55%, 100%)
  );

  box-shadow: 0 2px 0.75rem hsla(213, 52%, 20%, 0.2);
  color: var(--border-dark);
  left: 0;
  margin: 0;
  padding: 0.5rem;
  position: ${(props) => (props.isStatic ? 'static' : 'fixed')};
  right: 0;
  text-align: center;
  top: 0;
  z-index: 1000;
`;
