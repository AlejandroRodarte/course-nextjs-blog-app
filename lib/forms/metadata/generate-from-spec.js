const generateFromSpec = (spec) => {
  const root = {
    form: {
      isValid: false,
    },
    inputs: {},
  };

  for (const key in spec) {
    const isSubSpec = !Object.prototype.hasOwnProperty.call(
      spec[key],
      "strategies"
    );
    if (isSubSpec) root.inputs[key] = generateFromSpec(spec[key]);
    else
      root.inputs[key] = {
        isValid: false,
        message: undefined,
        touched: false,
      };
  }

  return root;
};

export default generateFromSpec;
