// Objective-3: Build a JavaScript console application to manage event reminders.


const reminders = [];

function addReminder(eventName, date, time) {
    reminders.push({ eventName, date, time });
}

function listUpcomingEvents() {
    const currentDate = new Date();
    const upcomingEvents = reminders.filter(reminder => {
        const eventDate = new Date(`${reminder.date}T${reminder.time}`);
        return eventDate > currentDate;
    }).sort((a, b) => {
        const dateA = new Date(`${a.date}T${a.time}`);
        const dateB = new Date(`${b.date}T${b.time}`);
        return dateA - dateB;
    });

    console.log("Upcoming Events:");
    upcomingEvents.forEach(event => {
        console.log(`${event.eventName} on ${event.date} at ${event.time}`);
    });
}

function removePastEvents() {
    const currentDate = new Date();
    reminders = reminders.filter(reminder => {
        const eventDate = new Date(`${reminder.date}T${reminder.time}`);
        return eventDate >= currentDate;
    });
}


addReminder('Doctor Appointment', '2024-05-01', '15:00');
addReminder('Meeting with team', '2024-04-30', '09:00');
listUpcomingEvents();
removePastEvents();
