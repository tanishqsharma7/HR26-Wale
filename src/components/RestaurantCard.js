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
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3> {name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes </h4>
      </div>
    );
  };

  
  export default RestrauntCard;