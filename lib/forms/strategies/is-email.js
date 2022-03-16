import regex from "../../regex";

const isEmail = (value) => {
  const isValid = !!String(value).toLowerCase().match(regex.email);
  return {
    isValid,
    message: isValid ? undefined : "Provide a valid email.",
  };
};

export default isEmail;
