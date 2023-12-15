import { Categories } from "../components/Categories.jsx";
import { Sort } from "../components/Sort.jsx";
import { CandlesList } from "../components/CandleList.jsx";
import "../styles/app.scss";

export const Home = () => {
    return (
        <>
            <Categories />
            <Sort />
            <CandlesList />
        </>
    );
}