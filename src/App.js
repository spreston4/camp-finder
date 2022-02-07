import React, { useState, useRef } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Message from "./components/Message/Message";
import CampSearch from "./components/CampSearch/CampSearch";
import CampsList from "./components/CampsList/CampsList";
import CampView from "./components/CampView/CampView";

function App() {
  const [searchTerms, setSearchTerms] = useState();
  const [selectedCamp, setSelectedCamp] = useState();
  const contentRef = useRef();

  const searchUpdateHandler = (terms) => {
    setSearchTerms(terms);
  };

  const viewCampHandler = (camp) => {
    setSelectedCamp(camp);
  };

  const closeCampHandler = () => {
    setSelectedCamp();
  };

  return (
    <div className={styles.container}>
      <Header />
      <Banner />
      <div className={styles.functions}>
        <Message />
        <CampSearch onUpdateSearch={searchUpdateHandler} onCloseCamp={closeCampHandler} scrollRef={contentRef}/>
      </div>
      <div ref={contentRef}></div>
    <div>
        {!selectedCamp && searchTerms && (
          <CampsList searchTerms={searchTerms} onViewCamp={viewCampHandler} scrollRef={contentRef}/>
        )}
        {selectedCamp && (
          <CampView camp={selectedCamp} onCloseCamp={closeCampHandler} />
        )}
      </div>
    </div>
  );
}

export default App;
