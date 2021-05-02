import React from "react";

function HocCheckbox(props) {
  return (
    <label className="col-12">
      <input type="checkbox" className="checkbox" />
      <span>{props.title}</span>
    </label>
  );
}

export default HocCheckbox;
