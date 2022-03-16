const errorsExist = (result) => {
  let exist = false;
  for (const key in result) {
    const isArray = Array.isArray(result[key]);
    if (isArray && result[key].length > 0) exist = true;
    else exist = errorsExist(result[key]);
    if (exist) return true;
  }
  return false;
};

export default errorsExist;
