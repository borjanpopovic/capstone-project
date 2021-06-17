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

export default function SelectIcons({ location, onSetLocation }) {
  return (
    <>
      {location.icon === '' ? null : (
        <img src={mapPin(location)} alt="map pin"></img>
      )}
      <div className="dropdown">
        <label htmlFor="icon">Choose a pin</label>
        <select className="dropbtn">Choose a pin</select>
        <div className="dropdown-content">
          <button
            type="button"
            onClick={() => onSetLocation({ ...location, icon: 'airport' })}
          >
            <img src={airport} alt="airport pin" width="30" height="30" />
          </button>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'bank' })}
          >
            <img src={bank} alt="bank pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'bar' })}
          >
            <img src={bar} alt="bar pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'bookmark' })}
          >
            <img src={bookmark} alt="bar pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'burger' })}
          >
            <img src={burger} alt="bar pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'bus' })}
          >
            <img src={bus} alt="bus pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'camera' })}
          >
            <img src={camera} alt="camera pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'cinema' })}
          >
            <img src={cinema} alt="cinema pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'clothes' })}
          >
            <img src={clothes} alt="clothes pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'coffee' })}
          >
            <img src={coffee} alt="coffee pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'drink' })}
          >
            <img src={drink} alt="drink pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'earth' })}
          >
            <img src={earth} alt="earth pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'gasoline' })}
          >
            <img src={gasoline} alt="gasoline pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'government' })}
          >
            <img src={government} alt="government pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'gym' })}
          >
            <img src={gym} alt="gym pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'heart' })}
          >
            <img src={heart} alt="heart pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'home' })}
          >
            <img src={home} alt="home pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'hospital' })}
          >
            <img src={hospital} alt="hospital pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'house' })}
          >
            <img src={house} alt="house pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'image' })}
          >
            <img src={image} alt="foto pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'info' })}
          >
            <img src={info} alt="info pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'lethal' })}
          >
            <img src={lethal} alt="lethal pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'med' })}
          >
            <img src={med} alt="med pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'office' })}
          >
            <img src={office} alt="office pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'parking' })}
          >
            <img src={parking} alt="parking pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'picnic' })}
          >
            <img src={picnic} alt="picnic pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'save' })}
          >
            <img src={save} alt="save pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'ship' })}
          >
            <img src={ship} alt="ship pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'spa' })}
          >
            <img src={spa} alt="spa pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'star' })}
          >
            <img src={star} alt="star pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'taxi' })}
          >
            <img src={taxi} alt="taxi pin" width="30" height="30" />
          </a>
          <a
            href="#"
            onClick={() => onSetLocation({ ...location, icon: 'wc' })}
          >
            <img src={wc} alt="wc pin" width="30" height="30" />
          </a>
        </div>
      </div>
    </>
  );
}
