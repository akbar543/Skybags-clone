import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Item from './Pages/Item/Item';
// import Footer from './Components/Footer'
import Cart from './redux/Cart';
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
<Route path='/admin' element={<Admin/>}/>
</Routes>
<Footer/>
</Router>
</div>
);
}

export default App;