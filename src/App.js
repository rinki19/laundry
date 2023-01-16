import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import RegistrationPage from './components/registrationpage' 
import LoginPage from './components/loginpage'
import Navbar from './components/Navbar'
import './App.css'
import Dashboard from './components/dashboard'

const App = () => (
  <>
<Router>
  <Routes>
    <Route path="/" element={<RegistrationPage />}/>
    <Route path="login" element={<LoginPage />} />
    <Route path="dashboard" element={<Dashboard />} />
  </Routes>
</Router>

  </>
)
export default App;
