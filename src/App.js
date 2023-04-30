import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar'
import Products from './components/products'
import Admin from './pages/admin'
import Addproduct from './pages/addproduct';
import UpdateProduct from './pages/UpdateProduct';
import DeleteProduct from './pages/DeleteProduct';
import AdminLogin from './pages/adminLogin'
import Protected from './protectedRoutes/Routes'
function App() {

  return (
   
 <>

  <BrowserRouter>
 
  <Routes>
    <Route path='/admin' element={<Protected Component={Admin}/>}/>
    <Route path='/admin/login' element={<AdminLogin/>}/>
    <Route path='/admin/addproduct' element={<Protected Component={Addproduct}/>}/>
    <Route path='/admin/updateproduct' element={<Protected Component={UpdateProduct}/>}/>
    <Route path='/' element={<><Navbar/><Products/></>}/>
    <Route path='/admin/deleteproduct' element={<Protected Component={DeleteProduct}/>}/>
   
  </Routes>
 
  </BrowserRouter>
 
  
 
 </>
  );
}

export default App;
