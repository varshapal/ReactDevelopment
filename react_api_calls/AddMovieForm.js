import React, { useState } from "react";

import classes from "./AddMovieForm.module.css";

const AddMovieForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    opening: "",
    releasing: "",
  });
  const [dataList, setDataList] = useState([]);

  const inputChangeHandler = (event) => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setDataList((prevData) => [...prevData, formData ]);
    setFormData({
        title: '',
        opening: '',
        releasing: '',
    })
    console.log(dataList);
  };

  
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label>
        Title
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={inputChangeHandler}
        />
      </label>
      <label>
        Opening text
        <input
          type="opening"
          name="opening"
          value={formData.opening}
          onChange={inputChangeHandler}
        />
      </label>
      <label>
        Release Date
        <input
          type="text"
          name="release"
          value={formData.releasing}
          onChange={inputChangeHandler}
        />
      </label>
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
