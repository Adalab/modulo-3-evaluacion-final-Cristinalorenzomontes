import React from "react";
import FilterByName from "./FilterByName";
import FilterByStatus from "./FilterByStatus";

const Filters = (props) => {
  const preventEvent = (ev) => {
    ev.preventDefault(ev);
  };
  return (
    <section>
      <form className="form" onSubmit={preventEvent}>
        <FilterByName
          handleFilter={props.handleFilter}
          nameFilter={props.filterName}
        />
        <FilterByStatus
          handleFilter={props.handleFilter}
          statusFilter={props.filterStatus}
        />
      </form>
    </section>
  );
};

export default Filters;
