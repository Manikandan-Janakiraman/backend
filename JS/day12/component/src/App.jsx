import { Link } from 'react-router-dom'
import './App.css'
import AppRoute from './routes/AppRoute'


const App = () => {
  return (
    <>
      <NavBar />

      <AppRoute />
    </>
  )
}

export default App


export const NavBar = () => {
  return (
    <div className="bg-black text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        React Forms
      </div>

      <div className="flex gap-4 flex-wrap">

        <Link to="/" className="bg-white text-black px-2 py-1 rounded hover:bg-amber-300">Sign up</Link>
        <Link className="bg-white text-black px-2 py-1 rounded hover:bg-amber-300" to="/login">Login</Link>
        <Link className="bg-white text-black px-2 py-1 rounded hover:bg-amber-300" to="/loginform">Login Form</Link>
        <Link className="bg-white text-black px-2 py-1 rounded hover:bg-amber-300" to="/usernameform">Username</Link>
        <Link className="bg-white text-black px-2 py-1 rounded hover:bg-amber-300" to="/registerform">Register</Link>
        <Link className="bg-white text-black px-2 py-1 rounded hover:bg-amber-300" to="/multiform">Multi Form</Link>
      </div>
    </div>
  )
}
