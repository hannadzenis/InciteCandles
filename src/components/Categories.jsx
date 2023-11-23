import "../styles/components/_categories.scss";
import React from "react";

export const Categories = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const onClickCategory = (index) => {
        setActiveIndex(index);
    }

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
                {categories.map((value, i)=><li className={activeIndex === i ? "active" : ""} onClick={()=>{onClickCategory(i)}}>{value}</li>)}
            </ul>
        </div>
    )
}