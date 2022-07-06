//Toggles between the burger menu and the regular navbar
function toggleMenu() {
    document
    .getElementsByClassName("burger")[0]
    .classList.toggle("responsive");
}

function toggleMenu() {
    //get a date
    const day = new Date();
    //Get the string form of the weekday
    const d = day.toLocaleString(
        'default', {weekday: 'long'}
    );
    //Set of an if statement to toggle the announcement
    if (d == "Friday") {
        document
        .getElementsByClassName("announce")
        .classList.toggle("announcement");
    }
}

//Returns the current day of the month
const currentDate = new Date();
document.querySelector('#day').textContent = currentDate.getDate();

//Returns the current day of the week in string form (i.e. Wednesday)
const d1 = currentDate.toLocaleString(
    'default', {weekday: 'long'}
);
document.querySelector('#dayOfWeek').textContent = d1;
//get the next few days...hopefully

const d2 = currentDate.toLocaleString(
    'default', {weekday: 'long'}
);

document.querySelector('#dayOfWeek2').textContent = d2;
const d3 = currentDate.toLocaleString(
    'default', {weekday: 'long'}
);
document.querySelector('#dayOfWeek3').textContent = d3;
const d4 = currentDate.toLocaleString(
    'default', {weekday: 'long'}
);
document.querySelector('#dayOfWeek4').textContent = d4;
const d5 = currentDate.toLocaleString(
    'default', {weekday: 'long'}
);
document.querySelector('#dayOfWeek5').textContent = d5;