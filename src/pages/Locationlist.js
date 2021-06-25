import styled from 'styled-components';
import '../App';
import LocationCard from '../Components/LocationCard';
export default function Locationlist({ locations, onRemoveFromList }) {
  return (
    <>
      <H1>Your location list</H1>
      <LocationCards>
        {locations.map((location, index) => (
          <LocationCard
            key={index + location}
            location={location}
            onRemoveFromList={onRemoveFromList}
          />
        ))}
      </LocationCards>
    </>
  );
}

const LocationCards = styled.div`
  padding: 1rem;
  margin-top: 0.5rem;
`;

const H1 = styled.h1`
  font-size: 1.25rem;
  margin-top: 4rem;

  color: var(--border-dark);
  text-align: center;
  padding-top: 1rem;
`;
