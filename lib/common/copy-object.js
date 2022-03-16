const isObject = (value) => typeof value === "object" && !Array.isArray(value);

const copyObject = (object) => {
  const copy = {};
  for (const key in object) {
    if (isObject(object[key])) copy[key] = copyObject(object[key]);
    else copy[key] = object[key];
  }
  return copy;
};

export default copyObject;
