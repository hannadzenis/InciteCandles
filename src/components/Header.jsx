import "../styles/components/_header.scss";
import logo from '../assets/img/candle_logo.svg';
import { MiniCart } from './MiniCart';

export const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logo} alt="logo" />
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