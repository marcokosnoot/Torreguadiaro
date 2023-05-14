// Define your available and unavailable dates
const availableDates = ['2023-06-01', '2023-06-02', '2023-06-03', '2023-06-10'];
const unavailableDates = ['2023-06-04', '2023-06-05', '2023-06-11'];

// Render the availability calendar
function renderCalendar() {
  const calendarElement = document.getElementById('calendar');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Clear the calendar
  calendarElement.innerHTML = '';

  // Add the days of the week
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < daysOfWeek.length; i++) {
    const dayOfWeekElement = document.createElement('div');
    dayOfWeekElement.classList.add('calendar-day');
    dayOfWeekElement.textContent = daysOfWeek[i];
    calendarElement.appendChild(dayOfWeekElement);
  }

  // Add empty cells for the days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const emptyCell = document.createElement('div');
    emptyCell.classList.add('calendar-day');
    calendarElement.appendChild(emptyCell);
  }

  // Add the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement('div');
    dayElement.classList.add('calendar-day');
    dayElement.textContent = day;

    const date = `${currentYear}-${currentMonth + 1}-${day.toString().padStart(2, '0')}`;
    if (availableDates.includes(date)) {
      dayElement.classList.add('available');
    } else if (unavailableDates.includes(date)) {
      dayElement.classList.add('unavailable');
      dayElement.setAttribute('disabled', true);
    }

    calendarElement.appendChild(dayElement);
  }
}

// Call the renderCalendar function to display the initial calendar
renderCalendar();
