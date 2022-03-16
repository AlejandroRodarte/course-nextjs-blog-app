import isEmail from "./is-email";
import isString from "./is-string";
import minStringLength from "./min-string-length";

const strategies = {
  "is-email": isEmail,
  "is-string": isString,
  "min-string-length": minStringLength,
};

export default strategies;
