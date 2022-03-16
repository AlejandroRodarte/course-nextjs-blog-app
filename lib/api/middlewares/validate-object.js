import formsLib from "../../forms";

const validateObject = (spec, path) => (req, res, next) => {
  const object = path.split(".").reduce((o, key) => o[key], req.body);
  const result = formsLib.validation.server.validateForm(object, spec);
  const errorsExist = formsLib.validation.server.errorsExist(result);
  if (errorsExist)
    return res.status(200).send({
      status: 422,
      code: "VALIDATION_ERROR",
      message: "There are validation errors.",
      data: result,
    });
  return next();
};

export default validateObject;
