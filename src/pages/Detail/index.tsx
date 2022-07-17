/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../features/itemsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Detail = () => {
  const dispatch = useAppDispatch();
  const { itemId } = useParams();

  useEffect(() => {
    dispatch(getItem(itemId));
  }, [itemId]);

  return (
    <div className="flex flex-col xl:px-20 max-w-6xl mx-auto mt-12">
      <div className="flex">
        <img src={""} alt="device" />
        <div>as</div>
      </div>
    </div>
  );
};

export default Detail;
