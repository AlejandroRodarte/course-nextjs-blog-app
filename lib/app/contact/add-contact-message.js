const addContactMessage = async (contact) => {
  const payload = { data: { contact } };
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
    return [response, undefined];
  } catch (e) {
    return [
      undefined,
      { message: "There was an error sending the submission request." },
    ];
  }
};

export default addContactMessage;
