/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
//components
import Card from "../../components/Card";
import Filter from "../../components/Filter";
//assets
import plus from "../../assets/add.svg";
//redux
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { fetchItems } from "../../features/itemsSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { items } = useAppSelector((state) => state?.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchItems());
  }, []);

  const handleFilter = (e: any) => {
    setCategory(e.target.value);
  };

  const filteredDevices = items?.filter(
    (item: any) =>
      (item.category === category || category === "All") &&
      (search === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-12">
      <div className="grid grid-cols-6 gap-4">
        <input
          className="lg:col-span-3 col-span-12 px-4 py-3 rounded-md text-xs outline-none text-gray-500"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Apple Watch,SamsungS21, MacbookPro..."
        />

        <div className="lg:col-end-7 lg:col-span-2 col-span-12 ">
          <Filter handleFilter={handleFilter} category={category} />
        </div>
      </div>

      <div className="grid xl:px-20 max-w-6xl mx-auto mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
        {filteredDevices?.map((item: any) => (
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
