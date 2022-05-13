//day names array
const dayNames = [
       "Sunday",
     "Monday",
     "Tuesday", 
"Wednesday",
     "Thursday", 
      "Friday", 
"Saturday"
    ];
    
    //Long month names array
    const months = [
"January", 
    "Febuary",
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
    ]
    
    const todaysdate = new Date();
    const dayName = dayNames[todaysdate.getDay()];
    const monthName = months[todaysdate.getMonth()];
    const year = todaysdate.getFullYear;
    const currentdate = dayName + ", " + todaysadate.getDate() + " " + monthName + ", " + todaysdate.getFullYear();
    
    document.getElementById('currentdate').textContent = currentdate;