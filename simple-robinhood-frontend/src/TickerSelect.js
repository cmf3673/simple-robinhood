import React, {useState, useEffect} from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import PriceDisplay from "./PriceDisplay";

const tickers = [
    "tesla",
    "fitbit"
    // "Ticker 2", 
    // "Ticker 3",
    // "Ticker 4",
    // "Ticker 5",
]

function TickerSelect() {

    const [selectedTicker, setSelectedTicker] = useState(tickers[0]);
    const [tickerPrice, setTickerPrice] = useState(0); // can have an if zero then display loading..

    const url = "http://localhost:5000/api/posts/";

    // get ticker price from mongodb
    const getTickerPrice = () => {
        axios.get(`${url}${selectedTicker}`)
        .then(res => {
            const tickerPrice = res.data.price;
            setTickerPrice(tickerPrice);
        })
        .catch(err => { console.log(`error: ${err}`) })};

    // gets the ticker price every time the ticker is changed and every .2 second
    useEffect(() => {
        const interval = setInterval(() => {
            getTickerPrice();
        }, 200);
        return () => clearInterval(interval);
    }, [selectedTicker]);

    return (
        <div>
             <div class="ticker_items">
                 {tickers.map(t => (
                     <Button onClick={() => setSelectedTicker(t)}>{t}</Button>))}
            </div>
            <p>{selectedTicker + " price"}</p>
            <PriceDisplay tickerPrice={tickerPrice}/>
        </div>
    )
};

export default TickerSelect;