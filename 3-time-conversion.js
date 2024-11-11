
function timeConversion(s) {
  // Write your code here
  const preriod = s.slice(-2);

  let hour = parseInt(s.slice(0, 2));
  const minute = s.slice(3, 5);
  const second = s.slice(6, 8);

  if (preriod === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else if (preriod === "PM") {
    if (hour !== 12) {
      hour += 12;
    }
  }

  hour = hour < 10 ? "0" + hour : hour;

  return `${hour} : ${minute} : ${second}`;
}

console.log(timeConversion("05:45:03PM"));