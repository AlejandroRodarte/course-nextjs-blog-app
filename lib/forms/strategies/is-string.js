const isString = (value) => {
  const isValid = typeof value === "string";
  return {
    isValid,
    message: isValid ? undefined : "Input should be a string.",
  };
};

export default isString;
