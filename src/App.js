import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Parts from './Pages/Parts/Parts';
import Purchase from './Pages/Parts/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/signup" element={<SignUp></SignUp>}></Route>
       <Route path="/parts" element={<Parts></Parts>}></Route>
       <Route path="/purchase/:id" element={<Purchase></Purchase>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
