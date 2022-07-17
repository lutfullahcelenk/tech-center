/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Card from "../../components/Card";
//redux
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { getItems } from "../../features/itemsSlice";
import { getCategories } from "../../features/categorySlice";

const Home = () => {
  const { items } = useAppSelector((state) => state.items);
  const { categories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getItems());
    dispatch(getCategories());
  }, []);

  return (
    <div className="pt-12">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <input
          className="w-full lg:w-2/5 px-4 py-3 rounded-md text-xs outline-none text-gray-500"
          type="text"
          placeholder="Apple Watch,SamsungS21, MacbookPro..."
        />

        <select className="w-full lg:w-1/3 mt-3 lg:mt-0 py-3 rounded-md text-sm text-center text-gray-500 outline-none">
          <option value="all">Categories</option>
          {categories.map((category: any) => (
            <option value={category?.name}>{category?.name}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-x-6 px-10 xl:w-3/4 xl:mx-auto mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item: any) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
