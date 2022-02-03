import styles from "./Message.module.css";

const Message = () => {
  return (
    <div className={styles.container}>
      <h3>PLAN YOUR NEXT ADVENTURE</h3>
      <p>
        Harness the power of the U.S. National Park Service to find the best campground {'&'} the perfect weather for your next
        excursion! Use the search bar to find campgrounds in your desired state.
        Select a campground to view additional details and a 7-day weather
        forecast for the area.
      </p>
    </div>
  );
};

export default Message;
