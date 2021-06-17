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

  /* function mapPin(location) {
    const icons = {
      airport: airport,
      bar: bar,
      bank: bank,
    };
    return icons[location.icon]; */
  // switch (location.icon) {
  //   case 'airport':
  //     return airport;
  //   case 'bank':
  //     return bank;
  //   case 'bar':
  //     return bar;
  //   case 'bookmark':
  //     return bookmark;
  //   default:
  //     return '';
  // }

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
  .dropbtn {
    padding: 0.5rem;
    font-size: 0.5rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  }

  .dropdown {
    position: relative;
    //display: inline-block;
  }

  .dropdown-content {
    display: none;
    background-color: transparent;
    position: absolute;
    //background-color: #f9f9f9;
    min-width: 3rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    background-color: transparent;
    color: black;
    //padding: 0.375rem 0.5rem;
    text-decoration: none;
    //display: block;
    width: 9vw;
  }

  /* .dropdown-content a:hover {
    background-color: var(--secondary);
  } */

  .dropdown:hover .dropdown-content {
    //display: block;
    background-color: transparent;
    background: blur(6px);

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  .dropdown:hover .dropbtn {
    background-color: var(--secondary);
  }
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
