import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Booking from './pages/booking';
import CheckIn from './pages/checkIn';

function App() {
  return (
    <BrowserRouter>
      {/* <p>Have Account?<Link to="/signin"><SignedIn>Sign In</SignedIn></Link></p> */}
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/hotels' element={<Dashboard />} />
        <Route path='/hotels/:id/booking' element={<Booking />} />
        <Route path='/checkin/:id' element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
