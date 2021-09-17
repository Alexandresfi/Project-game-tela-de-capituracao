import './App.css';
import Footer from './Components/Footer';
import Hearder from './Components/Header/Header';
import Home from './Components/Home';
import Clash_Cards_Champions from './assets/videonow/Clash_Cards_Champions.mp4'
import Nav from './Components/Header/Nav/Nav';
import SideBalls from './Components/SideBall';


function App() {
  return (
    <div className="app">
      <video autoPlay muted loop className="bg_video">
                <source src={Clash_Cards_Champions} type="video/mp4"/>
            </video>
        <Hearder/>
        <Nav/>
      <SideBalls/>
      <div className="container">
        <Home></Home>
        <Footer></Footer>
        
      </div>

        {/* <Home/>

        <Footer/> */}

        
            
    </div>
  );
}

export default App;
