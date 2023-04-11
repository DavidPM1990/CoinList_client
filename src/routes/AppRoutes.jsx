import { Route, Routes } from 'react-router-dom'
import CoinList from '../pages/HomePage/HomePage'
import Onecoin from '../pages/CoinDetails/CoinDetails'
import OneChart from '../pages/Chart/Chart'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<CoinList />} />
            {/* <Route path='/chart' element={<OneChart />} /> */}
            <Route path='/details/:id' element={<Onecoin />} />


        </Routes>
    )
}

export default AppRoutes