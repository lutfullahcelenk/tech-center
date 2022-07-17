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
      <div className="grid grid-cols-6 gap-4">
        <input
          className="lg:col-span-3 col-span-12 px-4 py-3 rounded-md text-xs outline-none text-gray-500"
          type="text"
          placeholder="Apple Watch,SamsungS21, MacbookPro..."
        />

        <select className="lg:col-end-7 lg:col-span-2 col-span-12 mt-3 lg:mt-0 p-3 rounded-md text-sm text-gray-500 outline-none">
          <option value="All">Categories</option>
          {categories.map((category: any) => (
            <option key={category.id} value={category?.name}>
              {category?.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid xl:px-20 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item: any) => (
          <Card key={item.id} data={item} to={`/detail/${item?.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Home;
