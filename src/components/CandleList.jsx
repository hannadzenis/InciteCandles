import React from "react";
import { CandleBlock } from "./CandleBlock.jsx";
import {Skeleton} from "./CandleSkeleton";
import "../styles/app.scss";

export const CandlesList = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        fetch('https://657b275c394ca9e4af13dbd1.mockapi.io/items')
            .then((result)=>result.json())
            .then((arr)=>{
                setItems(arr);
                setIsLoading(false);
            });
    }, [])
    return(
        <>
            <h2 className="content__title">All candles</h2>
            <div className="content__items">
                {
                    isLoading 
                    ? [...new Array(12)].map((_, index)=><Skeleton key={index}/>)
                    : items.map((candle)=><CandleBlock  key={candle.id} {...candle}/>)
                }
            </div>
        </>
    )
}