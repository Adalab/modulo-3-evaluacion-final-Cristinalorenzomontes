import React from "react";
import "../stylesheet/filter.scss";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "nameFilter",
    });
  };

  return (
    <>
      <label className="label-name" htmlFor="name"></label>
      <input
        className="input-name"
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
        placeholder="Filter by name"
      />
    </>
  );
};

export default FilterByName;
