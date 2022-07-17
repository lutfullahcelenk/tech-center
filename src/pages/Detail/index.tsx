/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../features/itemsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Detail = () => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();
  const { selectedItem } = useAppSelector((state) => state.items);

  useEffect(() => {
    dispatch(getItem(itemId));
  }, [itemId]);

  return (
    <div className="flex flex-col xl:px-20 max-w-6xl mx-auto mt-12 divide-y divide-black">
      <div className="flex flex-col sm:flex-row gap-x-8 pb-10">
        <img
          className="bg-white w-60 p-8 rounded shadow-lg"
          src={selectedItem.avatar}
          alt="device"
        />

        <div className="flex flex-col justify-between items-start pt-4 sm:pt-0">
          <div>
            <h2 className="text-3xl tracking-wider font-semibold lowercase first-letter:uppercase">
              {selectedItem.name}
            </h2>
            <p className="text-left text-gray-500 italic">{selectedItem.category}</p>
          </div>
          <p className="text-base">$ {selectedItem.price}</p>
        </div>
      </div>

      <div className="text-left">
        <h4 className="font-semibold tracking-wide py-4">Description</h4>
        <p>{selectedItem.description}</p>
      </div>
    </div>
  );
};

export default Detail;
