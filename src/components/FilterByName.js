import React from "react";

const FilterByName = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "nameFilter",
    });
  };

  return (
    <>
      <label className="label-name" htmlFor="name">
        Filter by name:
      </label>
      <input
        className="input-name"
        type="text"
        name="name"
        id="name"
        value={props.filterName}
        onChange={handleChange}
      />
    </>
  );
};

export default FilterByName;
