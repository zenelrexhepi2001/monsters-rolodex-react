import React from "react";

import "./search-box.component.css";

export const SearchBox = ({ handleChange, placeholder }) => (
  <div className="form-control">
    <input type="search" onChange={handleChange} placeholder={placeholder} />
  </div>
);
