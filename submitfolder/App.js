import CustomRoutes from "./customRoutes";
import { useState } from "react";
import Search from "./search";
import FetchImages from "./fetchImages";
import FetchSearchImages from "./FetchSearch";
function App() {
  const [searchTerm, setSearchterm] = useState("");

  return (
    <div>
      <Search updateSearchTerm={setSearchterm} />

      {!searchTerm ? (
        <FetchImages />
      ) : (
        <FetchSearchImages key={searchTerm} name={searchTerm} />
      )}
    </div>
  );
}

export default App;
