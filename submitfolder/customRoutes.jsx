import { Routes, Route } from "react-router-dom";

import FetchImages from "./fetchImages";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FetchImages />} />
     
    </Routes>
  );
}

export default CustomRoutes;
