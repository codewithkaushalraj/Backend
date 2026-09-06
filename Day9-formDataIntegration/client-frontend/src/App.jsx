import React, { useRef, useState } from "react";
import axios from "axios";

const App = () => {
  const [file,setFile]=useState(null);
  const fileref=useRef();
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    imageData: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // 1. Check if the input is a file type
    const inputValue = type == "file" ? files[0] : value;
    setFormInfo({ ...formInfo, [name]: inputValue });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", formInfo.name);
    formData.append("email", formInfo.email);
    formData.append("imageData", formInfo.imageData);
    console.log(formInfo);
    console.log(formData);

    const res=await axios.post('http://localhost:3000/file',formData)
    console.log(res)
    setFormInfo({
      name:'',
      email:'',
    })
    fileref.current.value=null;

  };
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <div className="flex justify-center p-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 text-xl p-10 border w-150"
        >
          <h1 className="text-5xl text-amber-400 font-bold">User Info.</h1>
          <input
          value={formInfo.name}
            className="border w-full pl-5 py-3 rounded-xl focus:blue"
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="John Roe"
          />
          <input
          value={formInfo.email}
            className="border w-full pl-5 py-3 rounded-xl focus:blue"
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />
          <input
            onChange={handleChange}
            ref={fileref}
            className="border w-full bg-gray-500 pl-5 py-3 rounded-xl focus:blue"
            type="file"
            placeholder="Upload Picture"
            name="imageData"
          />
          <button className="bg-blue-500  w-full rounded-full py-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
