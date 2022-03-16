import { useState, useCallback } from "react";

import formsLib from "../lib/forms";
import commonLib from "../lib/common";

const useForm = (initialForm, spec, mapper) => {
  const [form, setForm] = useState(initialForm);
  const [metadata, setMetadata] = useState(
    formsLib.metadata.generateFromSpec(spec)
  );

  const onInputChange = useCallback(
    (e) => {
      const { id, value } = e.target;
      const formNodes = mapper[id].split(".");

      setForm((prevForm) => {
        const copiedForm = commonLib.copyObject(prevForm);
        commonLib.setNestedProperty(copiedForm, formNodes, value);
        return copiedForm;
      });

      setMetadata((prevMetadata) => {
        const copiedMetadata = commonLib.copyObject(prevMetadata);
        const metadataNodes = [];
        formNodes.forEach((formNode) => {
          metadataNodes.push("inputs");
          metadataNodes.push(formNode);
        });

        let inputSpec = spec;
        for (const node of formNodes) inputSpec = inputSpec[node];
        const results = formsLib.metadata.updateInputMetadata(
          value,
          inputSpec
        );

        commonLib.setNestedProperty(copiedMetadata, metadataNodes, {
          ...results,
          touched: true,
        });

        const updatedFormMetadata = formsLib.metadata.updateFormMetadata(
          spec,
          copiedMetadata
        );

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
