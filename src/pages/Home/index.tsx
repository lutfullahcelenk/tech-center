/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import Card from "../../components/Card";
import {useAppSelector, useAppDispatch} from "../../store/hooks"
import {getItems} from "../../features/itemsSlice"

const Home = () => {
  const {items} = useAppSelector((state)=> state.items)
  console.log('items', items)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getItems())
  }, [])
  
  

  return (
    <div className="pt-12">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <input
          className="w-full lg:w-1/3 px-4 py-3 rounded-md text-xs"
          type="text"
          placeholder="Apple Watch,SamsungS21, MacbookPro"
        />

        <select className="w-full lg:w-1/5 mt-3 lg:mt-0 py-3 rounded-md text-xs">
          <option value="all">Tümü</option>
          <option value="phone">Telephone</option>
        </select>
      </div>

      <div className="grid gap-x-6 px-10 xl:px-60 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {items.map((item: any) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
