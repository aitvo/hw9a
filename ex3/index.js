// moment
const moment = require('moment');

// display date
const currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log("Current date and time: " + currentDate);

// solve number of years since November 26, 1976
const pastDate = moment('1976-11-26', 'YYYY-MM-DD'); // moment object for November 26, 1976

const yearsSince = moment().diff(pastDate, 'years'); //subtract

// print
console.log(`Number of years since November 26, 1976: ${yearsSince} years.`);
