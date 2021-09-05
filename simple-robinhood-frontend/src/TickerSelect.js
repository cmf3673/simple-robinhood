import React, {useState, useEffect} from "react";
import { ThemeProvider, createTheme, Button, CssBaseline } from '@material-ui/core';
import axios from "axios";
import LiveChart from './liveChart';
import { updateLocalHistory } from "./updateTickerHistory";
// import Button from '@material-ui/core/Button';
import PriceDisplay from "./PriceDisplay";

const theme = createTheme({
    palette: {
        background: {
            default: '#263238',
        },
        text: {
            primary: "#ffffff"
          },
        primary: {
            main: "#e0e0e0",
        },
        secondary: {
            main: "#ef9a9a",
        },
}});

const tickers = ['AAPL', 
                 'MSFT', 
                 'GOOG', 
                 'FB', 
                 'AMZN']

function TickerSelect() {

    const [selectedTicker, setSelectedTicker] = useState(tickers[0]);
    const [tickerPrice, setTickerPrice] = useState(0);
    const [tickerData, setTickerData] = useState([]);

    const url = "http://localhost:5000/api/posts/";

    // get ticker price from mongodb
    const getTickerPrice = () => {
        axios.get(`${url}${selectedTicker}`)
        .then(res => {
            const itemName = `${selectedTicker}TickerHistory`
            const tickerPrice = res.data.price;
            const currentData = updateLocalHistory(tickerPrice, itemName);
            setTickerData(currentData);
            setTickerPrice(tickerPrice);
        })
        .catch(err => { console.log(`error: ${err}`) })};

    // gets the ticker price every time the ticker is changed and every .5 second
    useEffect(() => {
        const interval = setInterval(() => {
            getTickerPrice();
        }, 500);
        return () => clearInterval(interval);
    }, [selectedTicker]);

    return (
        
        <ThemeProvider theme = {theme}>
             <CssBaseline />
             <div class="ticker_items" style={{backgroundColor: "primary"}}>
                 {tickers.map(t => (
                     <Button variant="contained" 
                             onClick={() => setSelectedTicker(t)}
                             color = {selectedTicker === t ? "secondary" : "primary"}
                             style={{maxWidth: '200px', maxHeight: '70px', minWidth: '200px', 
                                     minHeight: '70px', fontSize: '25px', margin: '10px', fontFamily: 'monospace'}}>
                                 {t}
                    </Button>       
                ))}
            </div>
            <p style={{fontFamily:'monospace', fontSize:'20px'}}>{selectedTicker + " price:"}</p>
            <PriceDisplay tickerPrice={tickerPrice}/>
            <LiveChart tickerData={tickerData} />
        </ThemeProvider>
    )
};

export default TickerSelect;