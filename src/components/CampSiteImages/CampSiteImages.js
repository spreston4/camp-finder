import { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./CampSiteImages.module.css";

// Required variable for Carousel package
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

// Displays a carousel of images of the selected campground to CampView.
const CampSiteImages = (props) => {
  return (
    <div className={styles.container}>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
      >
        {props.images.map((image) => (
          <img key={Math.random()} src={image.url} />
        ))}
      </Carousel>
    </div>
  );
};

export default CampSiteImages;
