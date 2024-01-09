import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRatingString,
      aggregatedDiscountInfoV3,
    } = resData.info;
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          className="res-logo"
          src={CDN_URL+cloudinaryImageId}
          alt="res-logo"
        />
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>
          <span>
            {avgRatingString} - {resData.info.sla.slaString}
          </span>
        </h5>
        <h3 className="discount_info">
          {aggregatedDiscountInfoV3
            ? aggregatedDiscountInfoV3.header +
              " " +
              aggregatedDiscountInfoV3.subHeader
            : ""}
        </h3>
      </div>
    );
  };

  export default RestaurentCard