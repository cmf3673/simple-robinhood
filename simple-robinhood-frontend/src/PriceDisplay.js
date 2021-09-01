import React, { useEffect } from "react";
<link rel="stylesheet" href="priceDisplay.css" />




function PriceDisplay(props) {
    // update the price every second
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         props.updatePrice();
    //     }, 1000)
    //     return () => clearInterval(interval);
    // })

    return (
            <div class = "price">
                <p>{props.tickerPrice}</p>
             </div>
    )
};

export default PriceDisplay;