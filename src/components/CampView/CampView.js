import styles from './CampView.module.css';
import Card from '../ui/Card/Card';
import Button from '../ui/Button/Button';

const CampView = (props) => {
    console.log(props.camp);
    return (
        <Card className={styles.container}>
            <div className={styles.content}>
               <h2>{props.camp.name}</h2>
            </div>
            <div className={styles.controls}>
                <Button onClick={props.onCloseCamp} alt={false}>Return</Button>
            </div>
        </Card>
    );
};

export default CampView;