import { CandleBlock } from "./CandleBlock.jsx";
import "../styles/app.scss";

export const CandlesList = () => {
    return(
        <>
            <h2 class="content__title">All candles</h2>
            <div class="content__items">
                <CandleBlock />
                <CandleBlock />
                <CandleBlock />
                <CandleBlock />
                <CandleBlock />
                <CandleBlock />
            </div>
        </>
    )
}