import s from "./Filter.module.css";

const Filter = ({ value, onChange }) => {
  return (
    <label className={s.contactFormLabel}>
      Find contacts by name
      <input
        className={s.contactFromInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;
