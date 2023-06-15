// import './HomePage.css'
// import { useEffect, useState } from 'react';
// import { Spinner } from 'react-bootstrap';
// import CoinAxios from '../../services/coinAxios';
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import SearchBar from '../../components/SearchBar/SearchBar';
// import { TrendingDownIcon, TrendingUpIcon } from '../../icons/icons';
// import Pagination from '../../components/Pagination/Pagination';


// const AllCoins = () => {

//     const axiosCoins = new CoinAxios();
//     const [coins, setCoins] = useState([]);
//     const [coinsCopy, setCoinsCopy] = useState([]);

//     const totalNumberProducts = coins.length

//     const [coinsPerPage, setCoinsPerPage] = useState(10);
//     const [currentPage, setCurrentPage] = useState(1);

//     const lastIndex = currentPage * coinsPerPage
//     const firstIndex = lastIndex - coinsPerPage

//     const getFullCoins = () => {

//         axiosCoins
//             .getAllCoins()
//             .then((listCoins) => {
//                 setCoins(listCoins);
//                 setCoinsCopy(listCoins);
//             })
//             .catch(err => console.log(err));
//     }

//     useEffect(() => {
//         getFullCoins()
//     }, [])

//     if (!coins) {
//         return (

//             <Spinner animation='border' role='status'>
//                 <span className='visually-hidden'>Loading...</span>
//             </Spinner>
//         )
//     }
//     else return (
//         coins.length ?
//             <>
//                 <div className='searchBar'>
//                     <SearchBar coinsCopy={coinsCopy} setCoins={setCoins} />
//                 </div>

//                 <Table striped hover variant="dark">
//                     <thead>
//                         <tr>
//                             <th></th>
//                             <th>Rank</th>
//                             <th>Symbol</th>
//                             <th>Name</th>
//                             <th>Current Price</th>
//                             <th>High Price 24H</th>
//                             <th>Low Price 24H</th>
//                             <th>Market Cap</th>
//                             <th>1H %</th>
//                             <th>24H %</th>
//                             <th></th>
//                         </tr>
//                     </thead>



//                     {coins.map(coin =>


//                         <thead key={coin.id}>
//                             <tr>
//                                 <td><img style={{ width: '3vw' }} src={coin.image} alt='logoImg' /></td>
//                                 <td>#{coin.market_cap_rank}</td>
//                                 <td>{coin.symbol}</td>
//                                 <td>{coin.name}</td>
//                                 <td>€{coin.current_price}</td>
//                                 <td>€{coin.high_24h}</td>
//                                 <td>€{coin.low_24h}</td>
//                                 <td>€{coin.market_cap}</td>
//                                 <td style={coin.price_change_percentage_1h_in_currency > 0 ? { color: '#8dc647' } : coin.price_change_percentage_1h_in_currency === 0 ? { color: 'grey' } : { color: '#e15241' }}>
//                                     {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
//                                     {coin.price_change_percentage_1h_in_currency < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />}
//                                 </td>
//                                 <td style={coin.price_change_percentage_24h > 0 ? { color: '#8dc647' } : coin.price_change_percentage_24h === 0 ? { color: 'grey' } : { color: '#e15241' }}>
//                                     {coin.price_change_percentage_24h.toFixed(2)}%
//                                     {coin.price_change_percentage_24h < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />}
//                                 </td>
//                                 <td><a href={`/details/${coin.id}`}><Button variant="secondary" size="md" disabled>See Details</Button></a></td>
//                             </tr>
//                         </thead>
//                     ).slice(firstIndex, lastIndex)}
//                 </Table>

//                 <Pagination coinsPerPage={coinsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalNumberProducts={totalNumberProducts} />

//             </>

//             : <div>Loading ...</div>
//     );
// }

// export default AllCoins






import './HomePage.css';
import { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CoinAxios from '../../services/coinAxios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SearchBar from '../../components/SearchBar/SearchBar';
import { TrendingDownIcon, TrendingUpIcon } from '../../icons/icons';
import Pagination from '../../components/Pagination/Pagination';
// import userAxios from '../../services/userAxios';
import { AuthContext } from '../../context/auth.context';
// import axios from 'axios';
import Fav from '../../components/Fav/Fav';

const AllCoins = () => {
    const axiosCoins = new CoinAxios();
    const [coins, setCoins] = useState([]);
    const [coinsCopy, setCoinsCopy] = useState([]);

    // const [fav, setFav] = useState(false);

    const { user } = useContext(AuthContext);



    const totalNumberProducts = coins.length;

    const [coinsPerPage, setCoinsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const lastIndex = currentPage * coinsPerPage;
    const firstIndex = lastIndex - coinsPerPage;

    const getFullCoins = () => {
        axiosCoins
            .getAllCoins()
            .then((listCoins) => {
                setCoins(listCoins);
                setCoinsCopy(listCoins);
            })
            .catch(err => console.log(err));
    };

    useEffect(() => {
        getFullCoins();
    }, []);

    // const favsAdd = (body) => {


    //     const userId = user._id
    //     console.log('soy el id del ususarioooooooooooooo', userId)


    //     userAxios
    //         .updateFavCoins(body)
    //         .then((data) => {
    //             console.log("added", data)
    //         })
    //         .catch((err) => console.log(err))
    // }


    const { favoriteCoins } = user
    // const mapId = favoriteCoins?.map(e => e.id)


    // console.log('soy el nombreID de la cryptomoneda', mapId)
    console.log('soy  todas las favoriteCoins', favoriteCoins)

    if (!coins) {
        return (
            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        );
    } else {
        const searchResults = coins.slice(firstIndex, lastIndex);


        return (
            <>
                <div className='searchBar'>
                    <SearchBar coinsCopy={coinsCopy} setCoins={setCoins} />
                </div>

                {searchResults.length > 0 ? (
                    <Table striped hover variant='dark'>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Rank</th>
                                <th>Symbol</th>
                                <th>Name</th>
                                <th>Current Price</th>
                                <th>High Price 24H</th>
                                <th>Low Price 24H</th>
                                <th>Market Cap</th>
                                <th>1H %</th>
                                <th>24H %</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {searchResults.map(coin => (
                                <tr key={coin.id}>
                                    <td><img style={{ width: '3vw' }} src={coin.image} alt='logoImg' /></td>
                                    <td>#{coin.market_cap_rank}</td>
                                    <td>{coin.symbol}</td>
                                    <td>{coin.name}</td>
                                    <td>€{coin.current_price}</td>
                                    <td>€{coin.high_24h}</td>
                                    <td>€{coin.low_24h}</td>
                                    <td>€{coin.market_cap}</td>
                                    <td style={coin.price_change_percentage_1h_in_currency > 0 ? { color: '#8dc647' } : coin.price_change_percentage_1h_in_currency === 0 ? { color: 'grey' } : { color: '#e15241' }}>
                                        {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                                        {coin.price_change_percentage_1h_in_currency < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />}
                                    </td>
                                    <td style={coin.price_change_percentage_24h > 0 ? { color: '#8dc647' } : coin.price_change_percentage_24h === 0 ? { color: 'grey' } : { color: '#e15241' }}>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                        {coin.price_change_percentage_24h < 0 ? <TrendingDownIcon /> : <TrendingUpIcon />}
                                    </td>
                                    <td><a href={`/details/${coin.id}`}><Button variant="secondary" size="md">See Details</Button></a></td>
                                    {/* <td><Button variant="secondary" size="md" onClick={() => favsAdd(coin)}>Add to Favorites</Button></td> */}
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <div className='text-white ml-5'><h3>No Results.</h3></div>
                )}
                <div className='pb-2'>
                    <Pagination coinsPerPage={coinsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} totalNumberProducts={totalNumberProducts} />
                </div>
            </>
        );
    }
};


export default AllCoins;



