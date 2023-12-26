import React from "react";
import { CandleBlock } from "./CandleBlock.jsx";
import {Skeleton} from "./CandleSkeleton";
import "../styles/app.scss";

export const CandlesList = ({categoryValue, sortValue}) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);

        const sortBy = sortValue.sortProperty.replace('-', '');
        const sortOrder = sortValue.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = categoryValue > 0 ? `category=${categoryValue}`: '';

        fetch(
            `https://657b275c394ca9e4af13dbd1.mockapi.io/items?${category}&sortBy=${sortBy}&order=${sortOrder}`,
            )
            .then((result)=>result.json())
            .then((arr)=>{
                setItems(arr);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [categoryValue, sortValue])

    return(
        <>
            <h2 className="content__title">All candles</h2>
            <div className="content__items">
                {
                    isLoading 
                    ? [...new Array(4)].map((_, index)=><Skeleton key={index}/>)
                    : items.map((candle)=><CandleBlock  key={candle.id} {...candle}/>)
                }
            </div>
        </>
    )
}