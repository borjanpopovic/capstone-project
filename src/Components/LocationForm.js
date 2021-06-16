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
import mapPin from '../lib/icons';
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
      setTimeout(() => setIsError(false), 2000);
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
      <span>
        <img src={mapPin(location)} alt="map pin"></img>
      </span>
      <div className="dropdown">
        <label htmlFor="icon">Choose a pin</label>
        <select className="dropbtn">Choose a pin</select>
        <div className="dropdown-content">
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'airport' })}
          >
            <img src={airport} alt="airport pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'bank' })}
          >
            <img src={bank} alt="bank pin" width="30" height="30" />
          </a>
          <a href="#" onClick={() => setLocation({ ...location, icon: 'bar' })}>
            <img src={bar} alt="bar pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'bookmark' })}
          >
            <img src={bookmark} alt="bar pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'burger' })}
          >
            <img src={burger} alt="bar pin" width="30" height="30" />
          </a>
          <a href="#" onClick={() => setLocation({ ...location, icon: 'bus' })}>
            <img src={bus} alt="bus pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'camera' })}
          >
            <img src={camera} alt="camera pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'cinema' })}
          >
            <img src={cinema} alt="cinema pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'clothes' })}
          >
            <img src={clothes} alt="clothes pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'coffee' })}
          >
            <img src={coffee} alt="coffee pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'drink' })}
          >
            <img src={drink} alt="drink pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'earth' })}
          >
            <img src={earth} alt="earth pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'gasoline' })}
          >
            <img src={gasoline} alt="gasoline pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'government' })}
          >
            <img src={government} alt="government pin" width="30" height="30" />
          </a>
          <a href="#" onClick={() => setLocation({ ...location, icon: 'gym' })}>
            <img src={gym} alt="gym pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'heart' })}
          >
            <img src={heart} alt="heart pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'home' })}
          >
            <img src={home} alt="home pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'hospital' })}
          >
            <img src={hospital} alt="hospital pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'house' })}
          >
            <img src={house} alt="house pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'image' })}
          >
            <img src={image} alt="image pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'info' })}
          >
            <img src={info} alt="info pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'lethal' })}
          >
            <img src={lethal} alt="lethal pin" width="30" height="30" />
          </a>
          <a href="#" onClick={() => setLocation({ ...location, icon: 'med' })}>
            <img src={med} alt="med pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'office' })}
          >
            <img src={office} alt="office pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'parking' })}
          >
            <img src={parking} alt="parking pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'picnic' })}
          >
            <img src={picnic} alt="picnic pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'save' })}
          >
            <img src={save} alt="save pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'ship' })}
          >
            <img src={ship} alt="ship pin" width="30" height="30" />
          </a>
          <a href="#" onClick={() => setLocation({ ...location, icon: 'spa' })}>
            <img src={spa} alt="spa pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'star' })}
          >
            <img src={star} alt="star pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => setLocation({ ...location, icon: 'taxi' })}
          >
            <img src={taxi} alt="taxi pin" width="30" height="30" />
          </a>
          <a href="#" onClick={() => setLocation({ ...location, icon: 'wc' })}>
            <img src={wc} alt="wc pin" width="30" height="30" />
          </a>
        </div>
      </div>
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
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);

  place-items: center;
  gap: 0.5rem;
  padding: 1rem;
  margin-top: 3rem;
  margin: 1rem;
  text-align: center;
  .dropbtn {
    //background-color: #4caf50;
    //color: white;
    padding: 1rem;
    font-size: 1rem;
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

    position: absolute;
    background-color: #f9f9f9;
    min-width: 3rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content a {
    color: black;
    //padding: 0.375rem 0.5rem;
    text-decoration: none;
    //display: block;
    width: 9vw;
  }

  .dropdown-content a:hover {
    background-color: var(--secondary);
  }

  .dropdown:hover .dropdown-content {
    //display: block;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }

  .dropdown:hover .dropbtn {
    background-color: var(--secondary);
  }
`;

const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  color: hsl(340, 95%, 95%);
  font-size: 0.5rem;
  margin: 0;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);

  :hover {
    background-color: var(--secondary);
  }
`;
