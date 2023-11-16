const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

// setting temporary values
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
// months are zero indexed values so no need to collect form the object
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0);
// console.log(futureDate)
// date manipulation and indexing
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const date = futureDate.getDate()
const mins = futureDate.getMinutes();

// index values from the list
const day = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];
// since getDay() and getMonth both return integers as output, 
// we can fetch the respective string from the objects list we created from the tops of the file
// we could still create a variable, get the day/month value and use it to fectch the respective string
giveaway.textContent = `giveaway end on ${day}, ${date} ${month} ${year} ${hours}:${mins}pm`

// countdown function manipulation
function getRemaindingTime() {
  const futureTime = futureDate.getTime();
  const today = new Date().getTime(); //current time
  const difference = futureTime - today;
  // the difference value is parsed as the time difference in milliseconds, 
  // so we have to do some calculations to get the day,hours,mins,secs

  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60m
  // 1d = 24hrs
  // values in millinseconds

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calcuting all the actuall values
  let days = difference / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((difference % oneDay) / oneHour);
  let minutes = Math.floor((difference % oneHour) / oneMinute);
  let seconds = Math.floor((difference % oneMinute) / 1000);


  // set values array
  const values = [days, hours, minutes, seconds];
  // text formatitng
  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    }
    return item;
  }

  items.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  })

  if (difference < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired!</h4>`
  }

}

// countdown
let countdown = setInterval(getRemaindingTime, 1000);
// calling the main function
getRemaindingTime();