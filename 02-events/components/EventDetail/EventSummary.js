import styles from './EventSummary.module.css'

function EventSummary(props) {
    return <section className={styles.summary}>
        <h1>{props.title}</h1>
    </section>;
}

export default EventSummary;