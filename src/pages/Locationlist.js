import styled from 'styled-components';
import '../App';
import LocationCard from '../Components/LocationCard';
export default function Locationlist({ locations }) {
  return (
    <>
      <H1>Your location list</H1>
      <LocationCards>
        {locations.map((location, index) => (
          <LocationCard key={index + location} location={location} />
        ))}
      </LocationCards>
    </>
  );
}

const LocationCards = styled.div`
  padding: 1rem;
  margin-top: 5rem;
`;

const H1 = styled.h1`
  font-size: 1.25rem;
  margin-top: 5rem;
  margin-bottom: 1rem;
  color: var(--border);
  text-align: center;
  padding-top: 2rem;
  z-index: 100;
`;
