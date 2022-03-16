import strategies from "../../strategies";

const validateForm = (form, spec) => {
  const result = {};
  for (const key in spec) {
    const isSubSpec = !Object.prototype.hasOwnProperty.call(
      spec[key],
      "strategies"
    );
    if (!isSubSpec) {
      const errors = [];
      for (const strategy of spec[key].strategies) {
        const result = strategies[strategy.type](form[key], strategy.payload);
        if (!result.isValid) errors.push(result.message);
      }
      result[key] = errors;
    } else result[key] = validateForm(form[key], spec[key]);
  }
  return result;
};

export default validateForm;
