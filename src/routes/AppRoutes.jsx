import { Route, Routes } from 'react-router-dom'
import CoinList from '../pages/HomePage/HomePage'
import Onecoin from '../pages/CoinDetails/CoinDetails'
import SignUp from '../pages/SignUp/SignUp'



const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CoinList />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/details/:id' element={<Onecoin />} />
        </Routes>
    )
}

export default AppRoutes