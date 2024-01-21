import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
    const handleAddItem = (item) => {
      // dispatch action
      dispatch(addItem(item));
    };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="border-b-2 my-3 font-sans flex justify-between text-left"
          >
            <div className="w-10/12">
              <p className="font-medium">{item.card.info.name}</p>
              <p>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </p>
              <p className="py-3 font-light text-sm mb-4">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-2/12 relative">
              <img
                className=" w-[120px] h-[100px] shadow-2xl border border-solid rounded-md mb-4"
                src={CDN_URL + item.card.info.imageId}
                alt="item-image"
              />
              <div className="absolute bottom-[10px] left-[40px]">
                <p className=" text-white-100 bg-blue-100 p-1 shadow-xl rounded-md" onClick={()=>handleAddItem(item)}>
                  Add+
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
