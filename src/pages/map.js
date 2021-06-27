import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import styled from 'styled-components';
import '../App';

export default function Map({ locations }) {
  return (
    <>
      <H1>Your map</H1>
      <MapWrapper id="mapid">
        <MapContainer center={[53.55, 9.98]} zoom={5} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {locations.map((location) => (
            <Marker
              key={location}
              position={[location.latitude, location.longitude]}
            >
              <Popup position={[location.latitude, location.longitude]}>
                <PopupCard>
                  <h3>{location.name}</h3>
                  <p>{location.category}</p>
                  <p>{location.address}</p>
                </PopupCard>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </MapWrapper>
    </>
  );
}

const H1 = styled.h1`
  color: var(--border-dark);
  font-size: 1.25rem;
  margin-top: 4rem;
  padding-top: 1rem;
  text-align: center;
`;

const MapWrapper = styled.div`
  .leaflet-container {
    bottom: 0;
    height: 88vh;
    margin-top: 1rem;
    width: 100%;
    z-index: 0;
  }

  .img {
    background: transparent;
  }
`;

const PopupCard = styled.div`
  background: linear-gradient(
    to right bottom,
    hsl(105, 55%, 97%),
    hsl(105, 55%, 100%)
  );

  color: var(--border-dark);
`;
