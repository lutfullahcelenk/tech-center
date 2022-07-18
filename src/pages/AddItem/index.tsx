/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { getCategories } from "../../features/categorySlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Formik, Form, Field } from "formik";
import { addItem } from "../../features/addItemSlice";
import { useNavigate } from "react-router-dom";

interface FormValues {
  id: number;
  createdAt: any;
  name: string;
  developerEmail: string;
  description: string;
  avatar: string;
  category: string;
  price: number;
}

const AddItem = () => {
  const { categories } = useAppSelector((state) => state?.categories);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: FormValues = {
    createdAt: Date.now(),
    name: "",
    avatar: "",
    developerEmail: "lutfullahclnk1104@gmail.com",
    price: 0,
    id: Date.now(),
    category: "",
    description: "",
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <div className="flex flex-col pt-20">
      <h3 className="text-2xl font-medium">Create Product</h3>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(addItem(values));
          navigate("/");
        }}
      >
        <Form>
          <div className="w-full max-w-lg mx-auto mt-12">
            {/* product name */}
            <div className="w-full p-2">
              <Field
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-xl p-4 leading-tight focus:outline-none focus:bg-gray-200"
                id="name"
                name="name"
                placeholder="Product name"
              />
            </div>

            {/* description */}
            <div className="w-full p-2">
              <Field
                as="textarea"
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-xl p-4 leading-tight focus:outline-none focus:bg-gray-200 resize-none h-40"
                placeholder="Description"
                id="description"
                name="description"
              />
            </div>

            {/* image URL */}
            <div className="w-full p-2">
              <Field
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-xl p-4 leading-tight focus:outline-none focus:bg-gray-200"
                id="avatar"
                name="avatar"
                placeholder="image URL"
              />
            </div>

            {/* categories */}
            <div className="w-full p-2">
              <div className="relative">
                <Field
                  as="select"
                  className="block appearance-none w-full bg-white border border-gray-200 text-gray-700 p-4 rounded-xl leading-tight focus:outline-none focus:bg-gray-200"
                  id="category"
                  name="category"
                >
                  <option value="All">Categories</option>
                  {categories?.map((category: any) => (
                    <option key={category?.id} value={category?.name}>
                      {category?.name}
                    </option>
                  ))}
                </Field>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* price */}
            <div className="w-full p-2">
              <Field
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-xl p-4 leading-tight focus:outline-none focus:bg-gray-200"
                id="price"
                name="price"
                placeholder="Price"
              />
            </div>

            {/* submit */}
            <div className="w-full p-2">
              <button
                type="submit"
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded-xl p-4 leading-tight active:bg-green-500"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddItem;
