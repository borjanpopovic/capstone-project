import styled from 'styled-components';
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
export default function LocationCard({ location }) {
  function mapPin(location) {
    switch (location.icon) {
      case 'airport':
        return <img src={airport} alt="airport pin" width="30" height="30" />;
      case 'bank':
        return bank;
      case 'bar':
        return bar;
      case 'bookmark':
        return bookmark;
      default:
        return '';
    }
  }

  return (
    <Card>
      <h2>{location.name}</h2>
      <p>{location.category}</p>
      <p>{mapPin(location)}</p>
      <p>{location.position}</p>
      <p>{location.adress}</p>
    </Card>
  );
}

const Card = styled.article`
  background-color: var(--primary);
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  font-family: sans-serif;
  height: 10rem;
  padding: 1rem 1rem;
  //min-width: calc((100% - 2rem) / 4);
`;
