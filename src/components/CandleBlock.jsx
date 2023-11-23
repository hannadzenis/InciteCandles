import "../styles/components/_candle-block.scss";
import "../styles/app.scss";
import React from "react";

export const CandleBlock = ({title, price}) => {
    const [candleCount, setCandleCount] = React.useState(0);
    const onClickAddButton = () => {
        setCandleCount(candleCount + 1);
    }

    return(
        <>
            <div className="candle-block">
                <img
                className="candle-block__image"
                src="https://i.etsystatic.com/15255740/r/il/76d3ea/5397689271/il_fullxfull.5397689271_sryp.jpg"
                alt="Candle"
                />
                <h4 className="candle-block__title">{title}</h4>
                <div className="candle-block__selector">
                    <ul>
                        <li className="active">soy</li>
                        <li>coconut</li>
                    </ul>
                    <ul>
                        <li className="active">S</li>
                        <li>M</li>
                        <li>L</li>
                    </ul>
                </div>
                <div className="candle-block__bottom">
                    <div className="candle-block__price">от {price}$</div>
                    <button onClick={onClickAddButton} className="button button--outline button--add">
                        <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                        </svg>
                        <span>Add</span>
                        <i>{candleCount}</i>
                    </button>
                </div>
            </div>
        </>
    )
}