const contactFormSpec = {
  email: {
    strategies: [
      {
        type: "is-string",
      },
      {
        type: "is-email",
      },
    ],
  },
  name: {
    strategies: [
      {
        type: "is-string",
      },
      {
        type: "min-string-length",
        payload: {
          minLength: 5,
        },
      },
    ],
  },
  message: {
    strategies: [
      {
        type: "is-string",
      },
      {
        type: "min-string-length",
        payload: {
          minLength: 20,
        },
      },
    ],
  },
};

export default contactFormSpec;
