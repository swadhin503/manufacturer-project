import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyProfile from './Pages/Dashboard/MyProfile';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Parts from './Pages/Parts/Parts';
import Purchase from './Pages/Parts/Purchase';
import Reviews from './Pages/Reviews/Reviews';
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
       <Route path="/reviews" element={<Reviews></Reviews>}></Route>
       <Route path="/purchase/:id" element={
         <RequireAuth>
           <Purchase></Purchase>
         </RequireAuth>
       }>
       </Route>
       <Route path="/dashboard" element={
         <RequireAuth>
           <Dashboard></Dashboard>
         </RequireAuth>
       }>
         <Route path="/dashboard/myProfile" element={<MyProfile></MyProfile>}></Route>
         <Route index element={<MyOrders></MyOrders>}></Route>
       </Route>
       
     </Routes>
     <Footer></Footer>
     <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
