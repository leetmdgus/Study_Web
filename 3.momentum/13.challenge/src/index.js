const clockTitle = document.querySelector(".js-clock");

const lastDayOfMonth =[31,28,31,30,31,30,31,31,30,31,30,31];

function getClock(){
  const date = new Date();

  const CHRISTMAS_MONTH = 12;
  const CHRISTMAS_DAY = 25;
  const CHRISTMAS_HOURS = 24;
  const CHRISTMAS_MINUTES = 60;
  const CHRISTMAS_SECONDS = 60;

  const CURRENT_MONTH = date.getMonth()+1;
  const CURRENT_DAY = date.getDate();
  const CURRENT_HOURS = date.getHours();
  const CURRENT_MINUTES = date.getMinutes();
  const CURRENT_SECONDS = date.getSeconds();
  
  let month = CURRENT_MONTH-1;
  let dDayMonthToDay = 0;
  
  while(month !== CHRISTMAS_MONTH-1){
    dDayMonthToDay += lastDayOfMonth[month]
    month++;
  }
  
  const dDayDay = dDayMonthToDay + CHRISTMAS_DAY-CURRENT_DAY;
  const dDayHours = String(CHRISTMAS_HOURS-CURRENT_HOURS).padStart(2,"0");
  const dDayMinutes =String( CHRISTMAS_MINUTES-CURRENT_MINUTES).padStart(2,"0");
  const dDaySeconds = String(CHRISTMAS_SECONDS-CURRENT_SECONDS).padStart(2,"0");

  clockTitle.innerText = `${dDayDay}d ${dDayHours}h ${dDayMinutes}m ${dDaySeconds}s`;
}


getClock();
setInterval(getClock, 1000);
