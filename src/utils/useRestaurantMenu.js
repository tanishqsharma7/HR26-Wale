import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resid) => {
    const [resInfo, setResInfo ] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async() => {
        const data = await fetch(MENU_API + resid +"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
}


export default useRestaurantMenu;