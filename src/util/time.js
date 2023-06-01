// Converts unix timeStamp to date
export const timeAway = (timestamp) => {
  const seconds = Math.floor((timestamp - new Date()) / 1000);

  let i = seconds / 31536000;

  if (i > 1) {
    return Math.floor(i) + " years away";
  }
  i = seconds / 2592000;
  if (i > 1) {
    return Math.floor(i) + " months away";
  }
  i = seconds / 86400;
  if (i > 1) {
    return Math.floor(i) + " days away";
  }
  i = seconds / 3600;
  if (i > 1) {
    return Math.floor(i) + " hours away";
  }
  i = seconds / 60;
  if (i > 1) {
    return Math.floor(i) + " minutes away";
  }
  return Math.floor(seconds) + " seconds away";
};

// Creates a unix timestamp for new inputs
export const createTimeStamp = () => {
  const date = new Date(Date.now());
  const timeStampForm = date.getTime(); //(Milliseconds since Epoch time);
  return timeStampForm;
};

// Sorts TimeStamps by most recent
export const sortByTimeStamp = (a, b) => {
  return b.timestamp - a.timestamp;
};
