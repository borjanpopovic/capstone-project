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
import tree from '../assets/map-pins/tree.png';
import wc from '../assets/map-pins/wc.png';
import wifi from '../assets/map-pins/wifi.png';
import yoga from '../assets/map-pins/yoga.png';
import zoo from '../assets/map-pins/zoo.png';

export default function mapPin(location) {
  const icons = {
    airport: airport,
    bar: bar,
    bank: bank,
    bookmark: bookmark,
    burger: burger,
    bus: bus,
    camera: camera,
    cinema: cinema,
    clothes: clothes,
    coffee: coffee,
    drink: drink,
    earth: earth,
    gasoline: gasoline,
    government: government,
    gym: gym,
    heart: heart,
    home: home,
    hospital: hospital,
    house: house,
    image: image,
    info: info,
    lethal: lethal,
    med: med,
    office: office,
    parking: parking,
    picnic: picnic,
    save: save,
    ship: ship,
    spa: spa,
    star: star,
    taxi: taxi,
    tree: tree,
    wc: wc,
    wifi: wifi,
    yoga: yoga,
    zoo: zoo,
  };
  return icons[location.icon];
}
