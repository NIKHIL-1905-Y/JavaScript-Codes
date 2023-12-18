//Creating Date Objects:
// Current date and time
const currentDate = new Date();
console.log(currentDate);

// Specific date and time
const specificDate = new Date(2023, 11, 25); // December 25, 2023
console.log(specificDate);



//Getting date Components
const date1 = new Date();

// Getting date components
const day = date1.getDate();
const month = date1.getMonth(); // Months are zero-based (0-11)
const year = date1.getFullYear();
const dayOfWeek = date1.getDay(); // Day of the week (0-6)

console.log(`${year}-${month + 1}-${day}, Day of the week: ${dayOfWeek}`)

//Setting Date Components

const date2 = new Date();

// Setting date components
date2.setDate(15);
date2.setMonth(6); // July (0-11)
date2.setFullYear(2024);

console.log(date2);

//Formatting Dates

const date3 = new Date();

// Formatting dates
const dateString = date3.toDateString();
const timeString = date3.toTimeString();
const localDateString = date3.toLocaleDateString();
const localTimeString = date3.toLocaleTimeString();

console.log(dateString);
console.log(timeString);
console.log(localDateString);
console.log(localTimeString);

//Maniputing Dates

const date4 = new Date();

// Getting milliseconds since Unix Epoch
const milliseconds = date4.getTime();
console.log(milliseconds);

// Setting date using milliseconds
const newDate = new Date(milliseconds);
console.log(newDate);

// Getting timezone offset in minutes
const timezoneOffset = date4.getTimezoneOffset();
console.log(`Timezone offset: ${timezoneOffset} minutes`);


//Important 


const dateTest = new Date();


console.log(dateTest.toLocaleString('default',{
    weekday:"long",
    
}));
