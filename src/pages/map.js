import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
/* import 'leaflet/dist/leaflet.css'; */
import styled from 'styled-components';
import '../App';
export default function Map() {
  return (
    <>
      <H1>Your map</H1>
      <MapWrapper id="mapid">
        <MapContainer center={[53.55, 9.98]} zoom={5} scrollWheelZoom={false}>
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

const H1 = styled.h1`
  color: var(--border-dark);
  font-size: 1.25rem;
  margin-top: 5rem;
  padding-top: 1rem;
  text-align: center;
`;

const MapWrapper = styled.div`
  .leaflet-container {
    bottom: 0;
    height: 33.2rem;
    margin-top: 1rem;
    width: 100%;
    z-index: 0;
  }

  .img {
    background: transparent;
  }
`;

/* 53.54541316002105, 9.985753997521998; */
