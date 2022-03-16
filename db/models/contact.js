import mongoose from "mongoose";

import regex from "../../lib/regex";

const definition = {
  email: {
    type: String,
    required: [true, "An email is required"],
    validate: [
      (value) => regex.email.test(value),
      "Please provide a valid email.",
    ],
  },
  name: {
    type: String,
    required: [true, "A name is required"],
    minlength: [5, "A name of mininum 5 characters is required."],
  },
  message: {
    type: String,
    required: [true, "A message is required"],
    minlength: [20, "A message of mininum 20 characters is required."],
  },
};

const schemaOpts = {
  collection: "contacts",
};

const schema = new mongoose.Schema(definition, schemaOpts);
const model = mongoose.models.Contacts || mongoose.model("Contacts", schema);

export default model;
