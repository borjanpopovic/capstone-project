import { useState } from 'react';
import styled from 'styled-components/macro';
import '../App';
import LocationCard from '../Components/LocationCard';

export default function Locationlist({ locations, onRemoveFromList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const searchResults = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleChange(event) {
    const input = event.target.value;
    setSearchTerm(input);
  }

  return (
    <>
      <H1>Your location list</H1>
      <SearchInput
        placeholder="Search..."
        type="text"
        name="name"
        value={searchTerm}
        onChange={handleChange}
      />

      <LocationCards>
        {searchResults.map((location, index) => (
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

const SearchInput = styled.input`
  border: none;
  border-radius: 2rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  font-size: 1rem;
  margin: 0.1rem;
  padding: 0.1rem 0.4rem;
`;

const LocationCards = styled.div`
  margin-bottom: 3rem;
  margin-top: 0.5rem;
  padding: 1rem;
`;

const H1 = styled.h1`
  color: var(--border-dark);
  font-size: 1.25rem;
  margin-top: 4rem;
  padding-top: 1rem;
  text-align: center;
`;
