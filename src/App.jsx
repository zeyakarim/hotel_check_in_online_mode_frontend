import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from './pages/dashboard';
import SignUp from './pages/signUp';
import SignIn from './pages/signIn';
import Booking from './pages/booking';
import CheckIn from './pages/checkIn';
import Home from './pages/home';
import { Button } from '@mui/material';
import Hotels from './pages/hotels';
function App() {
  return (
    <BrowserRouter>
      <header className="sticky top-0 z-50 bg-white shadow-md w-full">
        <div className="flex flex-row justify-between items-center w-[90%] mx-auto py-3 gap-4">
          <div className="flex items-center gap-8">
            <Link to="/" className="font-semibold text-2xl hover:text-blue-600 transition-colors">
              Tripster
            </Link>
              
            <nav className="hidden md:block">
              <ul className="flex flex-row gap-6">
                {['Home', 'About', 'Packages', 'Community'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase()}`} 
                      className="text-gray-700 hover:text-gray-900 hover:underline transition-colors text-sm font-medium"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outlined"
              component={Link}
              to="/signup"
              sx={{
                borderRadius: '20px',
                textTransform: 'capitalize',
                borderColor: '#213547',
                color: '#213547',
                '&:hover': {
                  borderColor: '#1a2a3a',
                  color: '#1a2a3a'
                }
              }}
            >
              Sign Up
            </Button>
            <Button 
              variant="contained"
              component={Link}
              to="/signin"
              sx={{
                borderRadius: '20px',
                textTransform: 'capitalize',
                backgroundColor: '#213547',
                '&:hover': {
                  backgroundColor: '#1a2a3a',
                  color: '#fff'
                }
              }}
            >
              Log In
            </Button>
          </div>
        </div>
      </header>
      {/* <p>Have Account?<Link to="/signin"><SignedIn>Sign In</SignedIn></Link></p> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/hotels' element={<Hotels />} />
        <Route path='/hotels/:id/booking' element={<Booking />} />
        <Route path='/checkin/:id' element={<CheckIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
