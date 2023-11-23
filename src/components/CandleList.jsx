import { CandleBlock } from "./CandleBlock.jsx";
import "../styles/app.scss";

export const CandlesList = () => {
    return(
        <>
            <h2 className="content__title">All candles</h2>
            <div className="content__items">
                <CandleBlock title='Gingerbread' price='20'/>
                <CandleBlock title='Snowflakes' price='20'/>
                <CandleBlock title='Mulled Wine' price='20'/>
                <CandleBlock title='Mango' price='20'/>
                <CandleBlock title='Christmas Tree' price='20'/>
                <CandleBlock title='Cookies & Cream' price='20'/>
            </div>
        </>
    )
}