import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react/cjs/react.development';

import validateLocation from '../lib/Validation';
/* import mapPin from '../lib/icons'; */
import SelectIcons from './SelectIcons';
export default function LocationForm({ onAddLocations }) {
  const initialLocation = {
    name: '',
    category: '',
    icon: '',
    position: '',
    adress: '',
  };

  const [location, setLocation] = useState(initialLocation);
  const [isError, setIsError] = useState(false);
  //console.log('added location', location);

  function updateLocation(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setLocation({ ...location, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (validateLocation(location)) {
      onAddLocations(location);
      setLocation(initialLocation);
      setIsError(false);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 3000);
    }
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      {isError ? <ErrorBox>Please check your entries</ErrorBox> : null}
      <label htmlFor="locationName">location name</label>
      <input
        onChange={updateLocation}
        type="text"
        name="name"
        value={location.name}
      />
      <label htmlFor="category">category</label>
      <input
        onChange={updateLocation}
        type="text"
        name="category"
        value={location.category}
      />
      <SelectIcons location={location} onSetLocation={setLocation} />

      <label htmlFor="currentPosition">currentPosition</label>
      <input
        onChange={updateLocation}
        type="text"
        name="currentPosition"
        value={location.position}
      />
      <label htmlFor="adress">adress</label>
      <input
        onChange={updateLocation}
        type="text"
        name="adress"
        value={location.adress}
      />
      <Button>Add to list/map</Button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.8rem;
  margin: 0 auto;
  //max-width: 28rem;
  //border: 1px solid var(--secondary);
  background: var(--primary);
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  color: var(--border-dark);
  font-size: 1rem;
  place-items: center;
  gap: 0.5rem;
  padding: 1rem;
  margin-top: 3rem;
  margin: 1rem;
  text-align: center;
`;

const ErrorBox = styled.div`
  background: var(--red);
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  color: hsl(340, 95%, 95%);
  font-size: 0.5rem;
  margin: 0;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: var(--secondary);
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);

  :hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
`;
