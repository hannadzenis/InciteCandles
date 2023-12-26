import "../styles/components/_categories.scss";
import React from "react";

export const Categories = ({categoryValue, onChangeCategory}) => {
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
                {categories.map((categoryName, i)=><li key={i} className={categoryValue === i ? "active" : ""} onClick={()=>{onChangeCategory(i)}}>{categoryName}</li>)}
            </ul>
        </div>
    )
}