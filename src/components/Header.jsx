import { Link } from 'react-router-dom';
import { MiniCart } from './MiniCart';
import "../styles/components/_header.scss";
import logo from '../assets/img/candle_logo.svg';

export const Header = () => {
    return(
        <div className="header">
            <div className="container">
                <Link to="/">
                    <div className="header__logo">
                        <img width="38" src={logo} alt="logo" />
                        <div>
                        <h1>Incite candles</h1>
                        <p>best candles for your rituals</p>
                        </div>
                    </div>
                </Link>
                <Link to="/cart">
                    <MiniCart />
                </Link>
            </div>
        </div>
    )
}