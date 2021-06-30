import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import styled from 'styled-components/macro';
import '../App';

export default function Map({ locations }) {
  function locationMarker(icon) {
    const marker = new L.Icon({
      iconUrl: `/assets/map-pins/${icon}.png`,
      iconSize: [32, 37],
      iconAnchor: [16, 37],
      popupAnchor: [0, -30],
    });
    return marker;
  }

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
              icon={locationMarker(location.icon)}
            >
              <Popup>
                <h3>{location.name}</h3>
                <p>{location.category}</p>
                <p>{location.address}</p>
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
    height: 87vh;
    margin-top: 1rem;
    width: 100%;
    z-index: 0;
  }

  .leaflet-popup-content-wrapper {
    /* background-color: transparent; */
    backdrop-filter: blur(0.2rem);

    background: linear-gradient(
      to right bottom,
      transparent,
      hsla(0, 0%, 100%, 0.7)
    );

    color: var(--border-dark);
  }

  a.leaflet-popup-close-button {
    color: var(--border-dark);
  }

  .img {
    background: transparent;
  }
`;
