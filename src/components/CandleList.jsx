import { CandleBlock } from "./CandleBlock.jsx";
import candles from "../Store/candles.json";
import "../styles/app.scss";

export const CandlesList = () => {
    return(
        <>
            <h2 className="content__title">All candles</h2>
            <div className="content__items">
                {candles.map((candle)=>(
                    <CandleBlock {...candle}/>))
                }
            </div>
        </>
    )
}