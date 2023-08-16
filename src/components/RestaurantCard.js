import { CDN_URL } from "../utils/constants";

const RestrauntCard = (props) => {
    const { resData } = props;
  
    const {
          cloudinaryImageId,
          name,
          avgRating,
          cuisines,
          costForTwo,
      } = resData?.info;
  
    return (
      <div className="m-4 p-4 w-[270px] h-[560px] rounded-lg bg-gray-100 hover:bg-gray-300 ">
        <img
          className="rounded-lg h-[270px] w-[270px]"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-4 text-lg"> {name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes </h4>
      </div>
    );
  };

  
  export default RestrauntCard;