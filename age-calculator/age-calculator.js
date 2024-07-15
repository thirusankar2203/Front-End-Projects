function calculate() {
  let currentDate = new Date();
  let date1 = currentDate.getDate();
  let month1 = currentDate.getMonth() + 1; // Months are zero-based
  let year1 = currentDate.getFullYear();

  let dob = document.querySelector('.input').value;
  let year2 = parseInt(dob.slice(0, 4));
  let month2 = parseInt(dob.slice(5, 7));
  let date2 = parseInt(dob.slice(8, 10));

  let ageDate = 0;
  let ageMonth = 0;
  let ageYear = year1 - year2;

  if (month1 >= month2) {
    ageMonth = month1 - month2;
  } else {
    ageYear--;
    ageMonth = 12 + month1 - month2;
  }

  if (date1 >= date2) {
    ageDate = date1 - date2;
  } else {
    ageMonth--;
    if (ageMonth < 0) {
      ageMonth = 11;
      ageYear--;
    }
    let daysInMonth = new Date(year1, month1 - 1, 0).getDate();
    ageDate = daysInMonth + date1 - date2;
  }

  document.querySelector('.out').innerHTML = `You are ${ageYear} years, ${ageMonth} months and ${ageDate} days old.`;
}