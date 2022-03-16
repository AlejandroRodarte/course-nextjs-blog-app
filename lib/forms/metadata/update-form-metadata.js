import commonLib from "../../common";

const isFormGroupValid = (metadataInputs) =>
  Object.keys(metadataInputs).every(
    (key) =>
      metadataInputs[key].isValid ||
      (metadataInputs[key].form && metadataInputs[key].form.isValid)
  );

const updateForm = (spec, metadata) => {
  const copiedMetadata = commonLib.copyObject(metadata);

  for (const key in spec) {
    const isSubSpec = !Object.prototype.hasOwnProperty.call(
      spec[key],
      "strategies"
    );
    if (isSubSpec)
      copiedMetadata.inputs = {
        ...copiedMetadata.inputs,
        [key]: updateForm(spec[key], copiedMetadata.inputs[key]),
      };
  }

  copiedMetadata.form.isValid = isFormGroupValid(copiedMetadata.inputs);
  return copiedMetadata;
};

export default updateForm;
