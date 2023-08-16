import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu= () =>{

    const {resid} = useParams();
    
    const resInfo = useRestaurantMenu(resid);

    if (resInfo == null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = 
    resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = 
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    const categories = 
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].filter(
        (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);



    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(" , ")} - {costForTwoMessage}
            </p>

            {categories.map((category)=>
            <RestaurantCategory />)}


            </div>
    );
};

export default RestaurantMenu;
            {/* <h2>Menu</h2>
            <ul>
            {itemCards.map(item => ( 
                <li>{item.card.info.name} - {" Rs. "}
                {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            </ul> */}
    