import { Route, Routes } from 'react-router-dom'
import Login from '../Login'
import LoginForm from '../LoginForm'
import UsernameForm from '../UsernameForm'
import RegisterForm from '../RegisterForm'
import MultiStepForm from '../MultiStepForm'
import SignupForm from '../SignupForm'


const AppRoute = () => {
    return (
        <>

            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/loginform' element={<LoginForm />} />
                <Route path='/usernameform' element={<UsernameForm />} />
                <Route path='/registerform' element={<RegisterForm />} />
                <Route path='/multiform' element={<MultiStepForm />} />
                <Route path='/' element={<SignupForm />} />

            </Routes>

        </>
    )
}

export default AppRoute