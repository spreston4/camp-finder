import styles from "./Banner.module.css";

// Displays welcome banner to the user.
const Banner = () => {
  return (
    <div className={styles.container}>
      <h2>GET OUT</h2>
      <h2>EXPLORE</h2>
    </div>
  );
};

export default Banner;
