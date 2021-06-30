import { useState } from 'react';
import styled from 'styled-components/macro';

import validateLocation from '../lib/Validation';

import SelectIcons from './SelectIcons';
export default function LocationForm({ onAddLocations }) {
  const initialLocation = {
    name: '',
    category: '',
    icon: '',
    latitude: '',
    longitude: '',
    address: '',
  };

  const [location, setLocation] = useState(initialLocation);
  const [isError, setIsError] = useState(false);
  const [status, setStatus] = useState(null);

  console.log('added location', location);

  function updateLocation(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    if (fieldName === 'address' && fieldValue.length >= 10) {
      lookupLocation(fieldValue);
    }

    setLocation({ ...location, [fieldName]: fieldValue });
  }

  function lookupLocation(address) {
    const apiUrl = `https://nominatim.openstreetmap.org/search?q=${address}&format=json`; // URLencode
    fetch(apiUrl)
      .then((result) => result.json())
      .then((data) => {
        // Rosenheimer 143, München
        setLocation({
          ...location,
          latitude: data[0].lat,
          longitude: data[0].lon,
          address: address,
        });
      });
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

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLocation({
            ...location,
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          setStatus('Unable to retrieve your location');
        }
      );
    }
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      {isError ? <ErrorBox>Please check your entries</ErrorBox> : null}
      <label htmlFor="locationName">Location name</label>
      <input
        onChange={updateLocation}
        type="text"
        name="name"
        value={location.name}
      />
      <label htmlFor="category">Category</label>
      <input
        onChange={updateLocation}
        type="text"
        name="category"
        value={location.category}
      />
      <SelectIcons location={location} onSetLocation={setLocation} />

      <Button
        onClick={getLocation}
        htmlFor="currentPosition"
        onChange={updateLocation}
        type="button"
        name="Get your position"
      >
        Get your position
      </Button>
      <p>{status}</p>
      <input
        onChange={updateLocation}
        placeholder="Latitude"
        type="text"
        value={location.latitude}
        name="latitude"
      />
      <input
        onChange={updateLocation}
        placeholder="Longitude"
        type="text"
        value={location.longitude}
        name="longitude"
      />

      <label htmlFor="address">Address</label>
      <input
        onChange={updateLocation}
        type="text"
        name="address"
        value={location.address}
      />
      <Button>Add to list/map</Button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.8rem;
  margin: 0 auto;

  background: linear-gradient(
    to right bottom,
    hsl(105, 55%, 97%),
    hsl(105, 55%, 100%)
  );
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

  input {
    border: none;
    border-radius: 2rem;
    box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
    font-size: 0.9rem;
    margin: 0.1rem;
    padding: 0.1rem 0.4rem;
  }

  p {
    font-size: 0.7rem;
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
  padding: 0.6rem;
  font-size: 0.8rem;
  background-color: var(--secondary);
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);

  :hover {
    background-color: var(--secondary);
    color: var(--primary);
  }
`;
