/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
//components
import Card from "../../components/Card";
//assets
import plus from "../../assets/add.svg";
//redux
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchItems } from "../../features/itemsSlice";
import { getCategories } from "../../features/categorySlice";
import { Link } from "react-router-dom";

const Home = () => {
  const { items } = useAppSelector((state) => state?.items);
  const { categories } = useAppSelector((state) => state?.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(getCategories());
  }, []);

  return (
    <div className="pt-12">
      <div className="grid grid-cols-6 gap-4">
        <input
          className="lg:col-span-3 col-span-12 px-4 py-3 rounded-md text-xs outline-none text-gray-500"
          type="text"
          placeholder="Apple Watch,SamsungS21, MacbookPro..."
        />

        <select className="lg:col-end-7 lg:col-span-2 col-span-12 mt-3 lg:mt-0 p-3 rounded-md text-sm text-gray-500 outline-none">
          <option value="All">Categories</option>
          {categories?.map((category: any) => (
            <option key={category?.id} value={category?.name}>
              {category?.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid xl:px-20 max-w-6xl mx-auto mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
        {items?.map((item: any) => (
          <Card key={item?.id} data={item} to={`/detail/${item?.id}`} />
        ))}
      </div>

      <Link to="add-item">
        <img
          className="fixed bottom-20 right-10 lg:right-32 w-12 sm:w-16"
          src={plus}
          alt="plus"
        />
      </Link>
    </div>
  );
};

export default Home;
