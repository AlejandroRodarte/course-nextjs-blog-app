import copyObject from "../../common/copy-object";

const isFormGroupValid = (metadataInputs) =>
  Object.keys(metadataInputs).every(
    (key) =>
      metadataInputs[key].isValid ||
      (metadataInputs[key].form && metadataInputs[key].form.isValid)
  );

const updateFormMetadata = (spec, metadata) => {
  const copiedMetadata = copyObject(metadata);

  for (const key in spec) {
    const isSubSpec = !Object.prototype.hasOwnProperty.call(
      spec[key],
      "strategies"
    );
    if (isSubSpec)
      copiedMetadata.inputs = {
        ...copiedMetadata.inputs,
        [key]: updateFormMetadata(spec[key], copiedMetadata.inputs[key]),
      };
  }

  copiedMetadata.form.isValid = isFormGroupValid(copiedMetadata.inputs);
  return copiedMetadata;
};

export default updateFormMetadata;
