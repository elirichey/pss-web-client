// Inputs..

export const combineDateAndTime = async (date, time) => {
  return await new Promise((resolve) => {
    const splitDate = date.split("-");
    const year = splitDate[0];
    const month = splitDate[1] - 1;
    const day = splitDate[2];
    const splitTime = time.split(":");
    const hours = splitTime[0];
    const minutes = splitTime[1];
    let dateTime = new Date();
    dateTime.setFullYear(year);
    dateTime.setMonth(month);
    dateTime.setDate(day);
    dateTime.setHours(hours);
    dateTime.setMinutes(minutes);
    dateTime.setSeconds(0);
    return resolve(dateTime);
  });
};

export const getDateMinimum = async () => {
  return await new Promise((resolve) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const res = `${year}-${month < 10 ? `0${month}` : month}-${day}`;
    return resolve(res);
  });
};

// Formatting..

export const formatDateTimeGetTime = (value, type) => {
  if (value && type === "date") {
    const newDate = new Date(parseInt(value));
    return formatDate(newDate);
  } else if (value && type === "time") {
    const newDate = new Date(parseInt(value));
    return formatTime(newDate);
  } else if ("full") {
    const newDate = new Date(parseInt(value));
    const fullDate = formatDate(newDate);
    const fullTime = formatTime(newDate);
    const fullDateTime = `${fullDate} ${fullTime}`;
    return fullDateTime;
  } else return "Unset";
};

export const formatDateTimeUTC = (value, type) => {
  if (value && type === "date") {
    const newDate = new Date(value);
    return formatDate(newDate);
  } else if (value && type === "time") {
    const newDate = new Date(value);
    return formatTime(newDate);
  } else if (value && type === "full") {
    const newDate = new Date(value);
    const fullDate = formatDate(newDate);
    const fullTime = formatTime(newDate);
    const fullDateTime = `${fullDate} ${fullTime}`;
    return fullDateTime;
  } else return "Unset";
};

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const fullDate = `${month}/${day}/${year}`;
  return fullDate;
};

const formatTime = (date) => {
  const tmpHours = date.getHours();
  const tmpMinutes = date.getMinutes();
  let hoursIndicator;
  if (tmpHours >= 12) hoursIndicator = "PM";
  else hoursIndicator = "AM";
  const hours = tmpHours > 12 ? tmpHours - 12 : tmpHours === 0 ? 12 : tmpHours;
  const minutes = tmpMinutes < 10 ? `0${tmpMinutes}` : tmpMinutes;
  const fullTime = `${hours}:${minutes} ${hoursIndicator}`;
  return fullTime;
};

export const formatDateForInput = (date) => {
  if (date) {
    const fDate = new Date(date);
    const year = fDate.getFullYear();
    const month = fDate.getMonth() + 1;
    const day = fDate.getDate();
    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }`;
  }

  // Set Today's Date
  const fDate = new Date();
  const year = fDate.getFullYear();
  const month = fDate.getMonth() + 1;
  const day = fDate.getDate();
  return `${year}-${month < 10 ? `0${month}` : month}-${
    day < 10 ? `0${day}` : day
  }`;
};
export const formatTimeForInput = (date) => {
  if (date) {
    const fDate = new Date(date);
    return `${
      fDate.getHours() < 10 ? `0${fDate.getHours()}` : fDate.getHours()
    }:${
      fDate.getMinutes() < 10 ? `0${fDate.getMinutes()}` : fDate.getMinutes()
    }`;
  }

  // Set Today's Date
  const fDate = new Date();
  return `${
    fDate.getHours() < 10 ? `0${fDate.getHours()}` : fDate.getHours()
  }:${fDate.getMinutes() < 10 ? `0${fDate.getMinutes()}` : fDate.getMinutes()}`;
};
