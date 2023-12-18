import React from "react";

import { Categories } from "../components/Categories.jsx";
import { Sort } from "../components/Sort.jsx";
import { CandlesList } from "../components/CandleList.jsx";
import "../styles/app.scss";

export const Home = () => {
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState(0);
    return (
        <>
            <Categories value={categoryId} onClickCategory={(index)=>setCategoryId(index)}/>
            <Sort />
            <CandlesList value={categoryId}/>
        </>
    );
}