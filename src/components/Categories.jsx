import "../styles/components/_categories.scss";
import React from "react";

export const Categories = ({value, onClickCategory}) => {
    const categories = [
        'All',
        'Meditation',
        'Decor',
        'Sets',
        'Gifts',
    ]

    return(
        <div className="categories">     
            <ul>
                {categories.map((categoryName, i)=><li key={i} className={value === i ? "active" : ""} onClick={()=>{onClickCategory(i)}}>{categoryName}</li>)}
            </ul>
        </div>
    )
}