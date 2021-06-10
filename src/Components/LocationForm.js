import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react/cjs/react.development';
import airport from '../assets/map-pins/airport.png';
import bank from '../assets/map-pins/bank.png';
import bar from '../assets/map-pins/bar.png';
import bookmark from '../assets/map-pins/bookmark.png';
import burger from '../assets/map-pins/burger.png';
import bus from '../assets/map-pins/bus.png';
import camera from '../assets/map-pins/camera.png';
import cinema from '../assets/map-pins/cinema.png';
import clothes from '../assets/map-pins/clothes.png';
import coffee from '../assets/map-pins/coffee.png';
import drink from '../assets/map-pins/drink.png';
import earth from '../assets/map-pins/earth.png';
import gasoline from '../assets/map-pins/gasoline.png';
import government from '../assets/map-pins/government.png';
import gym from '../assets/map-pins/gym.png';
import heart from '../assets/map-pins/heart.png';
import home from '../assets/map-pins/home.png';
import hospital from '../assets/map-pins/hospital.png';
import house from '../assets/map-pins/house.png';
import image from '../assets/map-pins/image.png';
import info from '../assets/map-pins/lethal.png';
import lethal from '../assets/map-pins/lethal.png';
import med from '../assets/map-pins/med.png';
import office from '../assets/map-pins/office.png';
import parking from '../assets/map-pins/parking.png';
import picnic from '../assets/map-pins/picnic.png';
import save from '../assets/map-pins/save.png';
import ship from '../assets/map-pins/ship.png';
import spa from '../assets/map-pins/spa.png';
import star from '../assets/map-pins/star.png';
import taxi from '../assets/map-pins/taxi.png';
import wc from '../assets/map-pins/wc.png';
import validateLocation from '../lib/Validation';

export default function LocationForm({ onAddLocation }) {
  const initialLocation = {
    name: '',
    category: '',
    icon: '',
    position: '',
    adress: '',
  };

  const [location, setLocation] = useState(initialLocation);
  const [isError, setIsError] = useState(false);

  function updateLocation(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setLocation({ ...location, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (validateLocation(location)) {
      onAddLocation(location);
      setLocation(initialLocation);
      setIsError(false);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 2000);
    }
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      {isError ? <ErrorBox>Please check your entries</ErrorBox> : null}
      <label htmlFor="locationName">location name</label>
      <input onChange={updateLocation} type="text" name="name" />
      <label htmlFor="category">category</label>
      <input onChange={updateLocation} type="text" name="category" />
      <select name="map-pin" id="map-pin">
        <option value="">---map pin---</option>
        <option value="airport">
          <img src={airport} alt="airport" />
        </option>
      </select>
      <label htmlFor="currentPosition">currentPosition</label>
      <input onChange={updateLocation} type="text" name="currentPosition" />
      <label htmlFor="adress">adress</label>
      <input onChange={updateLocation} type="text" name="adress" />
      <button>Add to list/map</button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: 0 auto;
  max-width: 25rem;
  //border: 1px solid var(--secondary);
  border-radius: 1rem;
  box-shadow: 0 2px 0.75rem hsla(213, 52%, 20%, 0.2);

  place-items: center;
  gap: 0.5rem;
  padding: 1rem;
  margin-top: 5rem;
  margin: 1rem;
  text-align: center;
`;

const ErrorBox = styled.div`
  background: darkred;
  padding: 1rem;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  font-family: sans-serif;
  text-align: center;
  box-shadow: 1px 1px 2px black;
`;
