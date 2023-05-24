import './HomePage.css'
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import CoinAxios from '../../services/coinAxios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import SearchBar from '../../components/SearchBar/SearchBar';
import { TrendingDownIcon, TrendingUpIcon } from '../../icons/icons';


const AllCoins = () => {

    const axiosCoins = new CoinAxios();
    const [coins, setCoins] = useState([]);
    const [coinsCopy, setCoinsCopy] = useState([]);

    const getFullCoins = () => {

        axiosCoins
            .getAllCoins()
            .then((listCoins) => {
                setCoins(listCoins);
                setCoinsCopy(listCoins);
            })
            .catch(err => console.log(err));
    }
    console.log(coins)

    useEffect(() => {
        getFullCoins()
    }, [])

    if (!coins) {
        return (

            <Spinner animation='border' role='status'>
                <span className='visually-hidden'>Loading...</span>
            </Spinner>
        )
    }
    else return (
        coins.length ?
            <>
                <div className='searchBar'>
                    <SearchBar coinsCopy={coinsCopy} setCoins={setCoins} />
                </div>

                <Table striped hover variant="dark">
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



                    {coins.map(coin =>


                        <thead key={coin.id}>
                            <tr>
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
                                <td><a href={`/details/${coin.id}`}><Button variant="secondary" size="md" disabled>See Details</Button></a></td>
                            </tr>
                        </thead>
                    )}
                </Table>

            </>

            : <div>Loading ...</div>
    );
}

export default AllCoins





