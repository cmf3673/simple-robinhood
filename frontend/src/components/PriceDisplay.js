import React from "react";

function PriceDisplay(props) {

    return (
            <div class = "price">
                <p style={{fontFamily: 'monospace', fontSize:'40px'}}> 
                {(props.tickerPrice) ? '$' + props.tickerPrice:'Loading..'} 
                </p>
            </div>
    )
};

export default PriceDisplay;