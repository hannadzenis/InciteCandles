import "../styles/components/_header.scss";

import { MiniCart } from './MiniCart';

export const Header = () => {
    return(
        <div class="header">
            <div class="container">
                <div class="header__logo">
                    {/* <img width="38" src="./img/pizza-logo.svg" alt="logo" /> */}
                    <div>
                    <h1>Incite candles</h1>
                    <p>best candles for your rituals</p>
                    </div>
                </div>
                <MiniCart />
            </div>
        </div>
    )
}