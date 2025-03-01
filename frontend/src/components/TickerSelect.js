import React, {useState, useEffect} from "react";
import { ThemeProvider, Button, CssBaseline } from '@material-ui/core';
import axios from "axios";
import LiveChart from './liveChart';
import PriceDisplay from "./PriceDisplay";
import theme from './colorTheme'

const tickers = ['AAPL', 
                 'MSFT', 
                 'GOOG', 
                 'FB', 
                 'AMZN']

function TickerSelect() {

    const [selectedTicker, setSelectedTicker] = useState(tickers[0]);
    const [tickerData, setTickerData] = useState([]);

    const url = "http://localhost:3001/api/stocks/";

    // get ticker prices from mongodb and sets data
    const getTickerPrice = () => {
        axios.get(`${url}${selectedTicker}`)
        .then(res => {
            const tickerData = res.data.prices;
            setTickerData(tickerData);
        })
        .catch(err => { 
            console.log(`error: ${err}`)
        })
    };

    // gets the ticker price every time the ticker is changed and every .2 second
    useEffect(() => {
        const interval = setInterval(() => {
            getTickerPrice();
        }, 200);
        return () => clearInterval(interval);
    }, [selectedTicker]);

    return (
        
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div class="ticker_items" style={{backgroundColor: "primary"}}>
                 {tickers.map(t => (
                    <Button variant="contained" 
                            onClick={() => setSelectedTicker(t)}
                            color = {selectedTicker === t ? "secondary" : "primary"}
                            style={{maxWidth: '200px', maxHeight: '70px', minWidth: '200px', 
                                     minHeight: '70px', fontSize: '25px', margin: '10px', fontFamily: 'monospace'}}
                                     >
                    {t}
                    </Button>       
                ))}
            </div>
            <p style={{fontFamily:'monospace', fontSize:'20px'}}>{selectedTicker + " price:"}</p>
            <PriceDisplay tickerPrice={tickerData[tickerData.length - 1]}/>
            <LiveChart tickerData={tickerData} />
        </ThemeProvider>
    )
};

export default TickerSelect;