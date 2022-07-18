import React, { useEffect } from "react";
import { getCategories } from "../../features/categorySlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const Filter = ({ handleFilter, category }: any) => {
  const { categories } = useAppSelector((state) => state?.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <select
      value={category}
      onChange={(e) => handleFilter(e)}
      className="mt-3 lg:mt-0 py-3 w-full px-auto rounded-md text-sm text-gray-500 outline-none "
    >
      <option value="All">Categories</option>
      {categories?.map((category: any) => (
        <option key={category?.id} value={category?.name}>
          {category?.name}
        </option>
      ))}
    </select>
  );
};

export default Filter;
