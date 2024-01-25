import useDebounce from "./Debounce";
import "./search.css";

import React, { useState } from "react";

function Search({ updateSearchTerm }) {
  const debounceCallback = useDebounce((e) => updateSearchTerm(e.target.value));
  return (
    <div>
      <input type="text" placeholder="search" onChange={debounceCallback} />
    </div>
  );
}

export default Search;
