import div, { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import CampSearch from "./components/CampSearch/CampSearch";
import CampsList from "./components/CampsList/CampsList";

function App() {
  const [searchTerms, setSearchTerms] = useState();
  const [selectedCamp, setSelectedCamp] = useState();

  const searchUpdateHandler = (terms) => {
    setSearchTerms(terms);
  };

  const viewCampHandler = (camp) => {
    setSelectedCamp(camp);
  };

  const closeCampHandler = () => {
    setSelectedCamp();
  };

  console.log(selectedCamp);

  return (
    <div className={styles.container}>
      <Header />
      {!selectedCamp && <CampSearch onUpdateSearch={searchUpdateHandler} />}
      {!selectedCamp && searchTerms && <CampsList searchTerms={searchTerms} onViewCamp={viewCampHandler} />}
    </div>
  );
}

export default App;
