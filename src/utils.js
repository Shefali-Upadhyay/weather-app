const UTILS = {
  getFormattedDateTime: () => {
    return `${d_names[curr_day]} ${curr_date}<SUP>${sup}</SUP> ${m_names[curr_month]} ${curr_year}
    ${curr_hour}:${curr_min}:${curr_sec}`;
  }
}