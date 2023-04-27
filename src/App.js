import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Products from './components/products'
import Admin from './pages/admin'
import Addproduct from './pages/addproduct';
import About from './about'
import axios from 'axios'
function App() {

  return (
   
 <>

  <BrowserRouter>
 
  <Routes>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/admin/addproduct' element={<Addproduct/>}/>
    <Route path='/' element={<><Navbar/><Products/></>}/>

   
  </Routes>
 
  </BrowserRouter>
 
  
 
 </>
  );
}

export default App;
