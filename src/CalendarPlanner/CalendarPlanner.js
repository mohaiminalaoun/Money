export const getMonth = () => {
  console.log("hello friends");
  const DAYS = ["S", "M", "T", "W", "T", "F", "S"];

  var today = new Date(),
    curYear = today.getFullYear();

  const Months = [
    ["Jan", 31],
    [
      "Feb",
      curYear % 400 === 0
        ? 29
        : curYear % 4 === 0 && curYear % 100 !== 0
        ? 29
        : 28
    ],
    ["Mar", 31],
    ["Apr", 30],
    ["May", 31],
    ["Jun", 30],
    ["Jul", 31],
    ["Aug", 31],
    ["Sep", 30],
    ["Oct", 31],
    ["Nov", 30],
    ["Dec", 31]
  ];

  var row = new Array(7).fill(0);
  let Month = [];
  console.log(DAYS);
  Month.push(row.concat());
  Month.push(row.concat());
  Month.push(row.concat());
  Month.push(row.concat());
  Month.push(row.concat());
  Month.push(row.concat());
  console.log(Month);

  let rowNum = Math.floor(today.getDate() / 7) + 1;

  //Month[rowNum][today.getDay()] = today.getDate();

  let weekday = today.getDay(),
    date = today.getDate();
  Month[rowNum][weekday] = date;

  let foundIt = false,
    cur = date;
  for (var i = 0; i < Month.length; i++) {
    for (var j = 0; j < Month[0].length; j++) {
      if (Month[i][j] === date) {
        foundIt = true;
      } else if (foundIt && cur < Months[today.getMonth()][1]) {
        cur = cur + 1;
        Month[i][j] = cur;
      }
    }
  }
  foundIt = false;
  cur = date;
  for (var i = Month.length - 1; i >= 0; i--) {
    for (var j = Month[0].length - 1; j >= 0; j--) {
      if (Month[i][j] === date) {
        foundIt = true;
      } else if (foundIt && cur > 1) {
        cur = cur - 1;
        Month[i][j] = cur;
      }
    }
  }

  console.log(Month);
  return Month;
};

export const getMonthName = () => {
  const MonthNames = [
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
    "December"
  ];
  let today = new Date(),
    monthIdx = today.getMonth();
  return MonthNames[monthIdx];
};
