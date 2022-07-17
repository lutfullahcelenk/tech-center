import React from "react";
import { Link } from "react-router-dom";

type IData = {
  data: any;
  to: string;
};

const Card = ({ data, to }: IData) => {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <Link to={to}>
        <img
          className="bg-white object-contain p-4 w-60 h-60 rounded-xl"
          src={data?.avatar}
          alt="device"
        />

        <div className="w-4/5">
          <p className="lowercase first-letter:uppercase pt-3 px-2 truncate text-base text-left">
            {data?.name}
          </p>
          <p className="pb-6 text-sm text-center">$ {data?.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
