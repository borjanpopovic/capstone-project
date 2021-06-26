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
import trash from '../assets/trash.svg';

import '../App';
export default function LocationCard({ location, onRemoveFromList }) {
  function mapPin(location) {
    switch (location.icon) {
      case 'airport':
        return <img src={airport} alt="airport pin" width="30" height="30" />;
      case 'bank':
        return <img src={bank} alt="bank pin" width="30" height="30" />;
      case 'bar':
        return <img src={bar} alt="bar pin" width="30" height="30" />;
      case 'bookmark':
        return <img src={bookmark} alt="bar pin" width="30" height="30" />;
      case 'burger':
        return <img src={burger} alt="bar pin" width="30" height="30" />;
      case 'bus':
        return <img src={bus} alt="bus pin" width="30" height="30" />;
      case 'camera':
        return <img src={camera} alt="camera pin" width="30" height="30" />;
      case 'cinema':
        return <img src={cinema} alt="cinema pin" width="30" height="30" />;
      case 'clothes':
        return <img src={clothes} alt="clothes pin" width="30" height="30" />;
      case 'coffee':
        return <img src={coffee} alt="coffee pin" width="30" height="30" />;
      case 'drink':
        return <img src={drink} alt="drink pin" width="30" height="30" />;
      case 'earth':
        return <img src={earth} alt="earth pin" width="30" height="30" />;
      case 'gasoline':
        return <img src={gasoline} alt="gasoline pin" width="30" height="30" />;
      case 'government':
        return (
          <img src={government} alt="government pin" width="30" height="30" />
        );
      case 'gym':
        return <img src={gym} alt="gym pin" width="30" height="30" />;
      case 'heart':
        return <img src={heart} alt="heart pin" width="30" height="30" />;
      case 'home':
        return <img src={home} alt="home pin" width="30" height="30" />;
      case 'hospital':
        return <img src={hospital} alt="hospital pin" width="30" height="30" />;
      case 'house':
        return <img src={house} alt="house pin" width="30" height="30" />;
      case 'image':
        return <img src={image} alt="foto pin" width="30" height="30" />;
      case 'info':
        return <img src={info} alt="info pin" width="30" height="30" />;
      case 'lethal':
        return <img src={lethal} alt="lethal pin" width="30" height="30" />;
      case 'med':
        return <img src={med} alt="med pin" width="30" height="30" />;
      case 'office':
        return <img src={office} alt="office pin" width="30" height="30" />;
      case 'parking':
        return <img src={parking} alt="parking pin" width="30" height="30" />;
      case 'picnic':
        return <img src={picnic} alt="picnic pin" width="30" height="30" />;
      case 'save':
        return <img src={save} alt="save pin" width="30" height="30" />;
      case 'ship':
        return <img src={ship} alt="ship pin" width="30" height="30" />;
      case 'spa':
        return <img src={spa} alt="spa pin" width="30" height="30" />;
      case 'star':
        return <img src={star} alt="star pin" width="30" height="30" />;
      case 'taxi':
        return <img src={taxi} alt="taxi pin" width="30" height="30" />;
      case 'wc':
        return <img src={wc} alt="wc pin" width="30" height="30" />;

      default:
        return '';
    }
  }

  return (
    <Card>
      <h3>{location.name}</h3>
      <p>{location.category}</p>
      <span>{mapPin(location)}</span>
      <p>{location.address}</p>
      <DeleteButton onClick={() => onRemoveFromList(location)}>
        <img src={trash} alt="trash" width="30" height="30" />
      </DeleteButton>
    </Card>
  );
}

const Card = styled.article`
  color: var(--border-dark);
  display: flex;
  align-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: var(--primary); */
  background: linear-gradient(
    to right bottom,
    hsl(105, 55%, 97%),
    hsl(105, 55%, 100%)
  );
  border-radius: 1rem;
  box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  font-family: sans-serif;
  height: auto;
  margin: 1rem;
  padding: 1rem 1rem;

  span {
    transform: scale(2);
  }
  //min-width: calc((100% - 2rem) / 4);
`;

const DeleteButton = styled.button`
  background: transparent;
  border: none;
  transform: scale(0.5);
`;
