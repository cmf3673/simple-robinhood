import React, {useState} from "react";
import Button from '@material-ui/core/Button';

const tickers = [
    "Ticker 1",
    "Ticker 2", 
    "Ticker 3",
    "Ticker 4",
    "Ticker 5",
]

function TickerSelect() {

    const [selectedTicker, setSelectedTicker] = useState(tickers[0]);

    // const handleChange = (e) => {
    //     setSelectedTicker(e.target.value);
    // };

    return (
        <div class="main">
            <div class="ticker_items">
                {tickers.map(t => (
                    <Button onClick={() => setSelectedTicker(t)}>{t}</Button>
                ))}
            </div>
            <div class = "price">
                <p>{selectedTicker}</p>
                <p>Price</p>
            </div>
        </div>
    )
};

export default TickerSelect;


// const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );