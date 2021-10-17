import './App.css';
import Products from './components/Products/Products';
import Detail from './components/Detail/Detail';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About';
import Advetirsment from './components/Advetirsment/Advetirsment';

function App() {
  return (

    <div className="App">
      <div className='wrapper'>
        <Navbar/>
        <div>
          <Switch>
              <Route path='/' exact component={Products}/>
              <Route path='/detail/:id' component={Detail}/>
              <Route path='/advetirsment/:par' component={Advetirsment}/>
              <Route path='/cart' component={Cart}/>
              <Route path='/about' component={About}/>
              <Route path='/contacts' component={Contacts}/>

          </Switch>
        </div>
        <Footer/>
      </div>
        
      
      
    </div>
  );
}

export default App;
