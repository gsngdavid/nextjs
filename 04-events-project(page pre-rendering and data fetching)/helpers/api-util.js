export async function getAllEvents() {
    const response = await fetch('https://nextjs-course-3eae2-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const events = [];

    for(let key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }
    return events;
}

