import styled from 'styled-components/macro';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import FooterNavigation from './Components/FooterNavigation';

function App() {
  return (
    <div className="App">
      <Header />
      <main></main>
      <FooterNavigation />
    </div>
  );
}

export default App;
