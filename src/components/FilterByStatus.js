import React from "react";
import "../stylesheet/filter.scss";

const FilterByStatus = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "status",
    });
  };

  return (
    <>
      <label className="label-status" htmlFor="status">
        Status:
      </label>
      <select
        id="status"
        name="status"
        className="form__input-text"
        value={props.filterStatus}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Alive">Alive</option>
        <option value="Dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </>
  );
};

export default FilterByStatus;
