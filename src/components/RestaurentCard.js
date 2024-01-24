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
    <div className="w-[225px] h-[340px] m-2 shadow-sm shadow-white">
      <img
        className="h-[200px] w-[225px] p-2 hover:scale-90 transition duration-500 cursor-pointer"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h4 className="font-bold ml-2">{name}</h4>
      <h5 className="italic ml-2">{cuisines.join(", ")}</h5>
      <h5 className="ml-2">
        <span>
          {avgRatingString} - {resData.info.sla.slaString}
        </span>
      </h5>
      <h3 className="ml-2">
        {aggregatedDiscountInfoV3
          ? aggregatedDiscountInfoV3.header +
            " " +
            aggregatedDiscountInfoV3.subHeader
          : ""}
      </h3>
    </div>
  );
};

export default RestaurentCard;
