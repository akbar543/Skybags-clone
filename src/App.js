import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Item from './Pages/Item/Item';
// import Footer from './Components/Footer'
import Cart from './Components/Cart/Cart';
import Carty from './redux/Carty';
import Footer from './Components/Footer/Footer'
import Admin from './Pages/Admin/Admin.js';

function App() {
return (
<div>
<Router>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/item' element={<Item/>}/>
<Route path='/cart' element={<Cart/>}/>
</Routes>
<Footer/>
</Router>
</div>
);
}

export default App;