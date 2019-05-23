let d = new Date();
let curr_day = d.getDay();
let curr_date = d.getDate();
let sup = "";
let curr_month = d.getMonth();
let curr_year = d.getFullYear();
let curr_hour = d.getHours();
let curr_min = d.getMinutes();
let curr_sec = d.getSeconds();

let UTILS = {
  getFormattedDateTime: () => {
    return `${CONSTANTS.d_names[curr_day]} ${curr_date}<SUP>${sup}</SUP> ${CONSTANTS.m_names[curr_month]} ${curr_year}<br>${curr_hour}:${curr_min}:${curr_sec}`;
  }
}