import React from "react";

function HocForm(props) {
  return (
    <label className="col-12">
      <span>{props.title}</span>
      <input type={props.type} className="input col-12 rounded" />
    </label>
  );
}

export default HocForm;
