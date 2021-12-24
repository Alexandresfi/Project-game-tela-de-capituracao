import './App.css';
import Rotas from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './Components/global';

function App() {
  return (
    <BrowserRouter>
      <Rotas/>
      <GlobalStyle/>
    </BrowserRouter>
  );
}

export default App;
