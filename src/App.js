import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Products from './components/products'
import Admin from './pages/admin'
import Addproduct from './pages/addproduct';
import UpdateProduct from './pages/UpdateProduct';
import DeleteProduct from './pages/DeleteProduct';
function App() {

  return (
   
 <>

  <BrowserRouter>
 
  <Routes>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/admin/addproduct' element={<Addproduct/>}/>
    <Route path='/admin/updateproduct' element={<UpdateProduct/>}/>
    <Route path='/' element={<><Navbar/><Products/></>}/>
    <Route path='/admin/deleteproduct' element={<DeleteProduct/>}/>
   
  </Routes>
 
  </BrowserRouter>
 
  
 
 </>
  );
}

export default App;
