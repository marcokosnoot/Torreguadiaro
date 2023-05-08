// Simulated booked dates
var bookedDates = ["2023-05-10", "2023-05-15", "2023-05-20"];

// Function to render the calendar
function renderCalendar() {
  var calendar = document.getElementById("calendar");
  calendar.innerHTML = "";

  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();

  var currentDate = new Date(year, month, 1);
  var lastDay = new Date(year, month + 1, 0).getDate();

  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Render day names
  for (var i = 0; i < 7; i++) {
    var dayName = document.createElement("div");
    dayName.classList.add("day");
    dayName.innerHTML = days[i];
    calendar.appendChild(dayName);
  }

  // Render days
  for (var i = 0; i < currentDate.getDay(); i++) {
    var emptyDay = document.createElement("div");
    emptyDay.classList.add("day");
    calendar.appendChild(emptyDay);
  }

  for (var i = 1; i <= lastDay; i++) {
    var day = document.createElement("div");
    day.classList.add("day");
    day.innerHTML = i;

    if (bookedDates.includes(year + "-" + (month + 1) + "-" + i)) {
      day.classList.add("booked");
    }

    calendar.appendChild(day);
  }
}

// Call the renderCalendar function
renderCalendar();
