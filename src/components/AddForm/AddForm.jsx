import React from "react";
import s from "./style.module.css";

const AddForm = ({addPeople}) => {
  return (
    <form className={s.form} onSubmit={(e) => addPeople(e)}>
      <input type="text" name="name" placeholder=" Name" />
      <input type="text" name="link" placeholder=" Link to avatar" />
      <select name="sex" id="select">
        <option value="">Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button className={s.btn_add}>Add</button>
    </form>
  );
};

export default AddForm;
