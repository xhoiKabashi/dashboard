const displayDate = document.querySelector("#date");
const now = new Date();

const currentDate = now.toDateString("al-AL");

displayDate.textContent = currentDate;
