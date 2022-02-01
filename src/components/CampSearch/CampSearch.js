import React, { useState, useEffect } from "react";
import styles from "./CampSearch.module.css";
import Card from "../ui/Card/Card";

const parkCode = "";
const stateCode = "Ca";
const queryString = "";
const resultsLimit = 75;

const CampSearch = (props) => {
  const [campsArray, setCampsArray] = useState([]);
  useEffect(() => {
    const fetchCamps = async () => {
      try {
        const response = await fetch(
          `https://developer.nps.gov/api/v1/campgrounds?stateCode=${stateCode}&limit=${resultsLimit}}&api_key=${process.env.REACT_APP_NPS_API_KEY}`
        );

        const data = await response.json();
        const campsData = data.data;
        const loadedCamps = [];

        for (const key in campsData) {
          loadedCamps.push({
            accessibility: campsData[key].accessibility,
            addresses: campsData[key].addresses,
            amenities: campsData[key].amenities,
            audioDescription: campsData[key].audioDescription,
            campsites: campsData[key].campsites,
            contacts: campsData[key].contacts,
            description: campsData[key].description,
            directionsOverview: campsData[key].directionsOverview,
            directionsUrl: campsData[key].directionsUrl,
            fees: campsData[key].fees,
            geometryPoiId: campsData[key].geometryPoiId,
            id: campsData[key].id,
            images: campsData[key].images,
            isPassportStampLocation: campsData[key].isPassportStampLocation,
            lastIndexedDate: campsData[key].lastIndexedDate,
            latLong: campsData[key].latLong,
            latitude: campsData[key].latitude,
            longitude: campsData[key].longitude,
            name: campsData[key].name,
            numberOfSitesFirstComeFirstServe:
              campsData[key].numberOfSitesFirstComeFirstServe,
            numberOfSitesReservable: campsData[key].numberOfSitesReservable,
            operatingHours: campsData[key].operatingHours,
            parkCode: campsData[key].parkCode,
            passportStampImages: campsData[key].passportStampImages,
            passportStampLocationDescription:
              campsData[key].passportStampLocationDescription,
            regulationsOverview: campsData[key].regulationsOverview,
            regulationsUrl: campsData[key].regulationsurl,
            reservationInfo: campsData[key].reservationInfo,
            reservationUrl: campsData[key].reservationUrl,
            url: campsData[key].url,
            weatherOverview: campsData[key].weatherOverview,
          });
        }

        setCampsArray(loadedCamps);
      } catch (error) {
        console.error("Error fetching camps: ", error);
      }
    };

    fetchCamps();
  }, []);

  console.log(campsArray);

  return (
    <Card className={styles.search}>
      <p>Woop there it is.</p>
    </Card>
  );
};

export default CampSearch;
