import React from "react";
import { CandleBlock } from "./CandleBlock.jsx";
import "../styles/app.scss";

export const CandlesList = () => {
    const [items, setItems] = React.useState([]);

    React.useEffect(() => {
        fetch('https://657b275c394ca9e4af13dbd1.mockapi.io/items')
            .then((result)=>result.json())
            .then((arr)=>setItems(arr));
    }, [])
    return(
        <>
            <h2 className="content__title">All candles</h2>
            <div className="content__items">
                {items.map((candle)=>(
                    <CandleBlock key={candle.id} {...candle}/>))
                }
            </div>
        </>
    )
}