function update() {
    // Get the current date
    const currentDate = new Date();
    const targetDate = new Date(2025, 3, 20); // Month is 0-indexed, so 3 is April
    const timeDifference = targetDate - currentDate;
    
    // calculate the days, hours, minutes and seconds left
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minsElement = document.getElementById('mins');
    const secsElement = document.getElementById('secs');

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minsElement.innerHTML = minutes;
    secsElement.innerHTML = seconds;
}

setInterval(update, 1000);