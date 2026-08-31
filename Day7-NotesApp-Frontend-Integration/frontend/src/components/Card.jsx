import React from "react";
import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Card = ({ data, deleteNote,setUpdatedData }) => {
  const { setFormValues } = useContext(MyContext);
  return (
    <div className="flex rounded-2xl flex-col text-xl bg-pink-200 w-100 h-fit p-4">
      <h1 className="text-green-600">
        <span className="text-blue-800 ">title</span>: {data.title}
      </h1>
      <p className="text-center text-yellow-900">
        <span className="text-blue-800 ">Description</span>: {data.description}
      </p>
      <div className="flex justify-center gap-5">
        <button
          onClick={() => {
            setUpdatedData(data);
            setFormValues({
              title: data.title,
              description: data.description,
            });
          }}
          className="bg-yellow-600 py-2 px-[10%] font-bold rounded-2xl "
        >
          Update
        </button>
        <button
          onClick={() => {
            // console.log(data);
            deleteNote(data._id);
          }}
          className="bg-red-600 py-2 rounded-2xl font-bold px-[10%]"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
