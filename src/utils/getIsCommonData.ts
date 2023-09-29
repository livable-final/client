const getIsCommonData = (item) => {
  const key = Object.keys(item);

  if (key[0].includes('common')) {
    return true;
  }
  return false;
};
export default getIsCommonData;
