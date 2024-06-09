"use client";
import React, { useState } from "react";
const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [main, setMain] = useState([]);

  const handleSubmit = (e) => {
    if (title && desc) {
      e.preventDefault();
      setMain([...main, { title, desc }]);
      setTitle("");
      setDesc("");
    } else {
      e.preventDefault();
    }
  };

  const handleDelete = (i) => {
    let copyTask = [...main];
    copyTask.splice(i, 1);
    setMain(copyTask);
  };

  let renderTask = <h2 className="font-bold">No Task Available</h2>;

  if (main.length > 0) {
    renderTask = main.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-8 ">
          <div className="flex items-center justify-between w-2/3">
            <h5 className="texl-2xl  font-semibold">{t.title}</h5>
            <h6 className="texl-lg font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              handleDelete(i);
            }}
            className="bg-red-400 text-white px-4 py-2  font-bold "
            id="delete"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <div className="font-mono">
      <h1
        className="bg-black text-white p-5 text-5xl
    font-bold text-center shadow-2xl  "
      >
        Todo-List
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded-lg shadow-2xl"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-8 px-4 py-2 rounded-lg shadow-2xl"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-2 text-2xl font-bold rounded-lg m-5 shadow-2xl">
          Add Task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-white ">
        <ul className="p-8 bg-slate-200 shadow-2xl rounded-lg  border-zinc-800 border-2">
          {renderTask}
        </ul>
      </div>
    </div>
  );
};

export default page;
