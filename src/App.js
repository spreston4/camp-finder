import React, { useState } from "react";
import CampSearch from "./components/CampSearch/CampSearch";
import CampsList from "./components/CampsList/CampsList";

function App() {
  const [searchTerms, setSearchTerms] = useState();

  const searchUpdateHandler = (terms) => {
    setSearchTerms(terms);
  };

  console.log(searchTerms);

  return (
    <React.Fragment>
      <CampSearch onUpdateSearch={searchUpdateHandler} />
      <CampsList searchTerms={searchTerms} />
    </React.Fragment>
  );
}

export default App;
