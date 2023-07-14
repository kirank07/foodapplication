//import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const restaurantMenuInfo = useRestaurant(resId);

    if (restaurantMenuInfo===null) return <Shimmer/>;
    const { name,cuisines,costForTwoMessage,avgRating} = restaurantMenuInfo?.cards[0]?.card.card.info;
    
    const {itemCards} = restaurantMenuInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    
    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>
            <h3>{avgRating}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map( (items) => <li>{items.card.info.name} - {"Rs."} {items.card.info.price/100 || items.card.info.defaultprice/100}</li>)}
            </ul>
        </div>
    );
};

export default RestaurantMenu;