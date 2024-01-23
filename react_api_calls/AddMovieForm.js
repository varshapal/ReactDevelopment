import React, { useRef } from "react";

import classes from "./AddMovieForm.module.css";

const AddMovieForm = (props) => {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    // add validation

    const movie = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddMovie(movie);

  }

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows='5' id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  )

  }
    
// const AddMovieForm = () => {
//   const [formData, setFormData] = useState({
//     title: "",
//     opening: "",
//     releasing: "",
//   });
//   const [dataList, setDataList] = useState([]);

//   const inputChangeHandler = (event) => {
//     event.preventDefault();
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const submitHandler = (e) => {
//     e.preventDefault();
//     const newMovieObj = {...formData };
//     setDataList((prevData) => [...prevData, newMovieObj ]);
//     setFormData({
//         title: '',
//         opening: '',
//         releasing: '',
//     })
//     console.log('new Movie', newMovieObj);
//   };

  
//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//       <label>
//         Title
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={inputChangeHandler}
//         />
//       </label>
//       <label>
//         Opening text
//         <input
//           type="opening"
//           name="opening"
//           value={formData.opening}
//           onChange={inputChangeHandler}
//         />
//       </label>
//       <label>
//         Release Date
//         <input
//           type="text"
//           name="release"
//           value={formData.releasing}
//           onChange={inputChangeHandler}
//         />
//       </label>
//       <button type="submit">Add Movie</button>
//     </form>
//   );
// };

export default AddMovieForm;
