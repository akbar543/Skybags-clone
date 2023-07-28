import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Item from './Pages/Item/Item';
import Footer from './Components/Footer'

function App() {
return (
<div>
<Router>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/item' element={<Item/>}/>
</Routes>
<Footer/>
</Router>
</div>
);
}

export default App;