const minStringLength = (value, payload) => {
  const isValid = value.length >= payload.minLength;
  return {
    isValid,
    message: isValid
      ? undefined
      : `String must have at least ${payload.minLength} characters.`,
  };
};

export default minStringLength;
