import styled from 'styled-components';

export default function LocationCard({ location }) {
  return (
    <Card>
      <h2>{location.name}</h2>
      <p>{location.category}</p>
      <p>{location.icon}</p>
      <p>{location.position}</p>
      <p>{location.adress}</p>
    </Card>
  );
}

const Card = styled.article`
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);

  padding: 1rem 1rem;
  height: 10rem;
  //min-width: calc((100% - 2rem) / 4);

  font-family: sans-serif;
`;
