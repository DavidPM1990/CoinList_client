import { Route, Routes } from 'react-router-dom'
import CoinList from '../pages/HomePage/HomePage'
import Onecoin from '../pages/CoinDetails/CoinDetails'
import SignUp from '../pages/SignUp/SignUp'
import LogIn from '../pages/LogIn/LogIn'
import { AuthProvider } from '../context/auth.context'
import IsPrivate from '../routes/isPrivate'
import Profile from '../pages/Profile/Profile'




const AppRoutes = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<IsPrivate><CoinList /></IsPrivate>} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/details/:id' element={<IsPrivate><Onecoin /></IsPrivate>} />
                <Route path='/profile' element={<IsPrivate><Profile /></IsPrivate>} />
            </Routes>
        </AuthProvider>
    )
}

export default AppRoutes