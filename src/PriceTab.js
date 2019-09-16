import React from "react";

function PriceTab(props) {
    return (
        <div className="price-tab">
            <div className="price-name">
                {props.type}
            </div>
            {props.isPopular === true &&
                <div className="price-popular">Popular</div>
            }
            <div className="price-amount">
                <span>{props.price}€</span>
                <span>pro Monat</span>
            </div>
            <div className="price-list">
                {
                    props.list.map((item) => 
                        <div>{item}</div>
                    )
                }
            </div>
            <button className="price-buy">Kaufen</button>
        </div>
    );
}

export default PriceTab;