import './CoinDetails.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsAxios from '../../services/detailsAxios';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';
import OneChart from '../../components/Chart/Chart';

const Onecoin = () => {

    const axiosOneCoin = new DetailsAxios();
    const [coin, setCoin] = useState([]);
    const { id } = useParams();

    const getCoin = () => {

        axiosOneCoin
            .getOneCoin(id)
            .then((coin) => {
                setCoin(coin)
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        getCoin()

    }, [])

    // console.log(coin)
    return (

        <>

            <div className='cardDisplay'>
                <Card style={{ width: '90vw' }}>
                    <Card.Body>
                        <ListGroup className="list-group-flush">
                            <Card.Img style={{ width: '5vw' }} variant="top" src={coin.small} />
                            <ListGroup.Item><strong>#{coin.market_cap_rank} {coin.symbol} {coin.name}</strong></ListGroup.Item>
                            <ListGroup.Item className='priceStyle'><strong>€{coin.currentPriceUsd}</strong></ListGroup.Item>
                        </ListGroup>
                        <Card.Text dangerouslySetInnerHTML={{ __html: coin.en }}>
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item><strong>Market Cap: €{coin.marketCapUsd}</strong></ListGroup.Item>
                        <ListGroup.Item><strong>Volume: €{coin.volumeUsd}</strong></ListGroup.Item>
                        <ListGroup.Item className='buttonStyle'>
                            <a href={'https://www.binance.com/es'}>
                                <Button variant="secondary">Buy</Button></a>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div>
                <OneChart />
            </div>

        </>
    )
}
export default Onecoin


















