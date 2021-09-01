import React from "react";
<link rel="stylesheet" href="priceDisplay.css" />



function PriceDisplay(props) {
    return (
            <div class = "price">
                <p>{ props.tickerPrice }</p>
             </div>
    )
};

export default PriceDisplay;