import React from "react";

import { Categories } from "../components/Categories.jsx";
import { Sort } from "../components/Sort.jsx";
import { CandlesList } from "../components/CandleList.jsx";
import "../styles/app.scss";

export const Home = () => {
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
        name: "popularity", sortProperty: "rating"
    });
    return (
        <>
            <div className="content__top">
                <Categories categoryValue={categoryId} onChangeCategory={(index)=>setCategoryId(index)}/>
                <Sort sortValue={sortType} onChangeSort={(index)=>setSortType(index)}/>
            </div>
            <CandlesList categoryValue={categoryId} sortValue={sortType}/>
        </>
    );
}