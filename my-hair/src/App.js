import {BrowserRouter as Router,Route,Switch }from "react-router-dom"
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Service from './Services/ServiceNav';
import Navbar from './Component/Navbar';
import Barber from './Services/ServiceFodder/Barber';
import Salon from './Services/ServiceFodder/Salon';
import Massage from './Services/ServiceFodder/Massage';
import BarberForm from "./Services/ServiceFodder/BarberForm";


function App() {
  return (
    <div className="App">
      <Router><Navbar/>
        <Switch>
          <Route path="/"><Home/></Route>
          <Route path="/about"><About/></Route>
          <Route path='/contact'><Contact/></Route>
          <Route path="/service"><Service/></Route>
          <Route path='/barber'><Barber/></Route>
          <Route path='/salon'><Salon/></Route>
          <Route path='/massage'><Massage/></Route>
          <Route path='/form'><BarberForm/></Route>
        </Switch>
      </Router>
   </div>
  );
}

export default App;
