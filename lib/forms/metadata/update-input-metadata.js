import strategies from "../strategies";

const updateInput = (value, spec) => {
  for (const strategy of spec.strategies) {
    const results = strategies[strategy.type](value, strategy.payload);
    if (results.isValid) continue;
    else return results;
  }
  return { isValid: true, message: undefined };
};

export default updateInput;
