import RestrauntCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const[ListOfRestaurants, setListOfRestaurant]= useState(resList);


    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={()=> {
            
            const filteredList = ListOfRestaurants.filter(res=>res.info.avgRating >4.5);
            setListOfRestaurant(filteredList);
          }}>
            Top Rated Restaurants</button>

        </div>
        <div className="res-container">
          {ListOfRestaurants.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};



  export default Body;