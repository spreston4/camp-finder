import React, { useState, useEffect } from "react";
import styles from "./CampsList.module.css";
import CampItem from "../CampItem/CampItem";
import Card from "../ui/Card/Card";
import loadingImage from '../../assets/images/Spinner-1s-200px-bg-light.gif';

const resultsLimit = 75;

// Fetches campgrounds from NPS API. Renders a CampItem for each result returned. Accepts search criteria from CampSearch.
const CampsList = (props) => {
  const [campsArray, setCampsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCamps = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://developer.nps.gov/api/v1/campgrounds?stateCode=${props.searchTerms}&limit=${resultsLimit}}&api_key=${process.env.REACT_APP_NPS_API_KEY}`
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
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching camps: ", error);
      }
    };

    fetchCamps();
  }, [props.searchTerms]);

  // Lift selected camp info to App
  const viewCampHandler = (camp) => {
    props.onViewCamp(camp);
  };

  return (
    <Card className={styles.container}>
      {isLoading && <img src={loadingImage} />}
      {!isLoading && campsArray.map((camp) => (
        <CampItem key={camp.id} camp={camp} onViewCamp={viewCampHandler} />
      ))}
    </Card>
  );
};

export default CampsList;
