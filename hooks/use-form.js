import { useState, useCallback } from "react";

import generateFromSpec from "../lib/forms/metadata/generate-from-spec";
import updateInputMetadata from "../lib/forms/metadata/update-input-metadata";
import updateFormMetadata from "../lib/forms/metadata/update-form-metadata";
import copyObject from "../lib/common/copy-object";
import setNestedProperty from "../lib/common/set-nested-property";

const useForm = (initialForm, spec, mapper) => {
  const [form, setForm] = useState(initialForm);
  const [metadata, setMetadata] = useState(generateFromSpec(spec));

  const onInputChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      const formNodes = mapper[id].split(".");

      setForm((prevForm) => {
        const copiedForm = copyObject(prevForm);
        setNestedProperty(copiedForm, formNodes, value);
        return copiedForm;
      });

      setMetadata((prevMetadata) => {
        const copiedMetadata = copyObject(prevMetadata);
        const metadataNodes = [];
        formNodes.forEach((formNode) => {
          metadataNodes.push("inputs");
          metadataNodes.push(formNode);
        });

        let inputSpec = spec;
        for (const node of formNodes) inputSpec = inputSpec[node];
        const results = updateInputMetadata(value, inputSpec);

        setNestedProperty(copiedMetadata, metadataNodes, {
          ...results,
          touched: true,
        });

        const updatedFormMetadata = updateFormMetadata(spec, copiedMetadata);

        return updatedFormMetadata;
      });
    },
    [setForm, setMetadata]
  );

  const clearForm = useCallback(() => {
    setForm(() => initialForm);
  }, [setForm]);

  return { form, metadata, onInputChange, clearForm };
};

export default useForm;
