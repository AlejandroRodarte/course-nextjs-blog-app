import validateForm from "../../forms/validation/server/validate-form";
import errorsExist from "../../forms/validation/server/errors-exist";

const validateObject = (spec, path) => (req, res, next) => {
  const object = path.split(".").reduce((o, key) => o[key], req.body);
  const result = validateForm(object, spec);
  const errorExists = errorsExist(result);
  if (errorExists)
    return res.status(200).send({
      status: 422,
      code: "VALIDATION_ERROR",
      message: "There are validation errors.",
      data: result,
    });
  return next();
};

export default validateObject;
