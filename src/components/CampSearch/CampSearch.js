import React, { useEffect } from "react";
import styles from "./CampSearch.module.css";
import Card from "../ui/Card/Card";

const CampSearch = (props) => {
  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const response = await fetch(`https://developer.nps.gov/api/v1/campgrounds?limit=627&api_key=${process.env.REACT_APP_NPS_API_KEY}`);
        
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching camps: ", error);
      }
    };

    fetchCamps();
  }, []);

  return (
    <Card className={styles.search}>
      <p>Woop there it is.</p>
    </Card>
  );
};

export default CampSearch;
