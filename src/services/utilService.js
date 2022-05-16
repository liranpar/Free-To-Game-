export const utilService = {
  dateForDisplay,
};

function dateForDisplay(actTime) {
  const now = new Date();
  const date = new Date(actTime);
  const dayOfWeek = now.getDay();
  const dayOfAct = date.getDay();
  const timePassed = now - date;
  const hours = date.getHours();
  const minutes = date.getMinutes();

  if (timePassed < 1000 * 60)
    return `${(timePassed / 1000).toFixed(0)} seconds ago `;
  if (timePassed < 1000 * 60 * 60)
    return `${(timePassed / (1000 * 60)).toFixed(0)} minutes ago `;

  if (timePassed < 1000 * 60 * 60 * 24 && dayOfWeek === dayOfAct)
    return `Today, ${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } `;

  if (
    timePassed < 1000 * 60 * 60 * 24 * 2 &&
    (Math.abs(dayOfWeek - dayOfAct) === 1 ||
      Math.abs(dayOfWeek - dayOfAct) === 6)
  )
    return `Yesterday, ${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    } `;

  return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${
    date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
  },  ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } `;
}
