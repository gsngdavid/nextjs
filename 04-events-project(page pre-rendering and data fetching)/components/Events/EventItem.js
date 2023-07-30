import styles from './EventItem.module.css';
import Button from "../UI/Button";
import DateIcon from '../Icons/DateIcon'
import AddressIcon from '../Icons/AddressIcon'
import ArrowRightIcon from '../Icons/ArrowRightIcon'

function EventItem(props) {

    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const formatedAddress = location.replace(', ', '\n');

    return <li className={styles.item}>
        <img src={`/${image}`} alt={title} />
        <div className={styles.content}>
            <div className={styles.summary}>
                <h2>{title}</h2>
                <div className={styles.date}>
                    <DateIcon />
                    <time>{humanReadableDate}</time>
                </div>
                <div className={styles.address}>
                    <AddressIcon />
                    <address>{formatedAddress}</address>
                </div>
            </div>
            <div className={styles.actions}>
                <Button link={`/events/${id}`} >Explore Event <span className={styles.icon}><ArrowRightIcon /></span></Button>
            </div>
        </div>
    </li>;
}

export default EventItem;