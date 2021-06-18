import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Components/Header';
import FooterNavigation from './Components/FooterNavigation';
import Form from './pages/Form';
import Locationlist from './pages/Locationlist';
import Map from './pages/Map';
function App() {
  const [locations, setLocations] = useState([]);

  function addLocations(location) {
    setLocations([...locations, location]);
  }

  return (
    <div className="App">
      <Header />
      <MainWrapper>
        <Switch>
          <Route exact path="/">
            <Form onAddLocations={addLocations} />
          </Route>
          <Route path="/location-list">
            <Locationlist locations={locations} />
          </Route>
          <Route path="/map">
            <Map />
          </Route>
        </Switch>
      </MainWrapper>
      <FooterNavigation />
    </div>
  );
}

export default App;

const MainWrapper = styled.main``;
