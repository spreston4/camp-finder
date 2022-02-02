import div, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import CampSearch from "./components/CampSearch/CampSearch";
import CampsList from "./components/CampsList/CampsList";

function App() {
  const [searchTerms, setSearchTerms] = useState();

  const searchUpdateHandler = (terms) => {
    setSearchTerms(terms);
  };

  console.log(searchTerms);

  return (
    <div className={styles.container}>
      <Header />
      <CampSearch onUpdateSearch={searchUpdateHandler} />
      {searchTerms && <CampsList searchTerms={searchTerms} />}
    </div>
  );
}

export default App;
