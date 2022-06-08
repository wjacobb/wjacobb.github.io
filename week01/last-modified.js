// Returns the proper year.
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// Returns the last modified date.
const date = new Date(document.lastModified);
document.getElementById("demo").innerHTML = date;