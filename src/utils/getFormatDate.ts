type OriginDateType = string | Date;

const getFormatDate = (originDate: OriginDateType) => {
  const date = new Date(originDate);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // yyyy-MM-dd (ex. 2023-01-06)
  return `${year}-${month < 10 ? `0${month}` : `${month}`}-${
    day < 10 ? `0${day}` : `${day}`
  }`;
};

export default getFormatDate;
