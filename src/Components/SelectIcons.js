import styled from 'styled-components';
import mapPin from '../lib/icons';
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
import info from '../assets/map-pins/info.png';
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
import tree from '../assets/map-pins/tree.png';
import wc from '../assets/map-pins/wc.png';
import wifi from '../assets/map-pins/wifi.png';
import yoga from '../assets/map-pins/yoga.png';
import zoo from '../assets/map-pins/zoo.png';

export default function SelectIcons({ location, onSetLocation }) {
  return (
    <SelectWrapper>
      {location.icon === '' ? null : (
        <ImgSelected src={mapPin(location)} alt="map pin" />
      )}
      <div className="dropdown">
        <label htmlFor="icon">Choose a pin</label>
        <select className="dropbtn">Choose a pin</select>
        <div className="dropdown-content">
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'airport' })}
          >
            <Img src={airport} alt="airport pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'bank' })}
          >
            <Img src={bank} alt="bank pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'bar' })}
          >
            <Img src={bar} alt="bar pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'bookmark' })}
          >
            <Img src={bookmark} alt="bar pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'burger' })}
          >
            <Img src={burger} alt="bar pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'bus' })}
          >
            <Img src={bus} alt="bus pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'camera' })}
          >
            <Img src={camera} alt="camera pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'cinema' })}
          >
            <Img src={cinema} alt="cinema pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'clothes' })}
          >
            <Img src={clothes} alt="clothes pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'coffee' })}
          >
            <Img src={coffee} alt="coffee pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'drink' })}
          >
            <Img src={drink} alt="drink pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'earth' })}
          >
            <Img src={earth} alt="earth pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'gasoline' })}
          >
            <Img src={gasoline} alt="gasoline pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'government' })}
          >
            <Img src={government} alt="government pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'gym' })}
          >
            <Img src={gym} alt="gym pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'heart' })}
          >
            <Img src={heart} alt="heart pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'home' })}
          >
            <Img src={home} alt="home pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'hospital' })}
          >
            <Img src={hospital} alt="hospital pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'house' })}
          >
            <Img src={house} alt="house pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'image' })}
          >
            <Img src={image} alt="foto pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'info' })}
          >
            <Img src={info} alt="info pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'lethal' })}
          >
            <Img src={lethal} alt="lethal pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'med' })}
          >
            <Img src={med} alt="med pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'office' })}
          >
            <Img src={office} alt="office pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'parking' })}
          >
            <Img src={parking} alt="parking pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'picnic' })}
          >
            <Img src={picnic} alt="picnic pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'save' })}
          >
            <Img src={save} alt="save pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'ship' })}
          >
            <Img src={ship} alt="ship pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'spa' })}
          >
            <Img src={spa} alt="spa pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'star' })}
          >
            <Img src={star} alt="star pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'taxi' })}
          >
            <Img src={taxi} alt="taxi pin" width="30" height="30" />
          </Button>
          <Button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'tree' })}
          >
            <Img src={tree} alt="tree pin" width="30" height="30" />
          </Button>
          <Button
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'wc' })}
          >
            <Img src={wc} alt="wc pin" width="30" height="30" />
          </Button>
          <Button
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'wifi' })}
          >
            <Img src={wifi} alt="wifi pin" width="30" height="30" />
          </Button>
          <Button
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'yoga' })}
          >
            <Img src={yoga} alt="yoga pin" width="30" height="30" />
          </Button>
          <Button
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'zoo' })}
          >
            <Img src={zoo} alt="zoo pin" width="25" height="25" />
          </Button>
        </div>
      </div>
    </SelectWrapper>
  );
}

const SelectWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;

  .dropbtn {
    padding: 0.5rem;
    font-size: 0.5rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 0 0.125rem 0.75rem hsla(213, 52%, 20%, 0.2);
  }

  .dropdown {
    position: relative;
  }

  .dropdown-content {
    display: none;
    background-color: transparent;
    backdrop-filter: blur(0.2rem);
    border-radius: 1rem;
    position: absolute;
    width: 15rem;
    box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
    padding: 1rem;
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    background-color: transparent;
    background: blur(0.375rem);
    align-items: center;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 0.1rem;
  }

  .dropdown:hover .dropbtn {
    background-color: var(--secondary);
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  text-decoration: none;

  width: 9vw;
`;

const ImgSelected = styled.img`
  margin-left: 3rem;
`;

const Img = styled.img`
  transform: scale(1.5);
`;
