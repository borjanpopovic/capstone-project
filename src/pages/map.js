import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
/* import 'leaflet/dist/leaflet.css'; */
import styled from 'styled-components';
import '../App';
export default function Map() {
  return (
    <>
      <h1>Your map</h1>
      <MapWrapper id="mapid">
        <MapContainer center={[53.55, 9.98]} zoom={2} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[53.55, 9.98]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </MapWrapper>
    </>
  );
}

const MapWrapper = styled.div`
  .leaflet-container {
    height: 50rem;
    margin-top: 10rem;
    width: 90vw;
    z-index: 0;
  }

  .img {
    background: transparent;
  }
`;

/* 53.54541316002105, 9.985753997521998; */
