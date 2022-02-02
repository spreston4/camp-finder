import React from "react";
import CampSearch from "./components/CampSearch/CampSearch";
import CampsList from "./components/CampsList/CampsList";

function App() {
  return (
    <React.Fragment>
      <CampSearch />
      <CampsList />
    </React.Fragment>
  );
}

export default App;
