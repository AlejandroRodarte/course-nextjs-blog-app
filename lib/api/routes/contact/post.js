const post = (req, res) => {
  const { contact } = req.body.data;
  return res.status(200).send({
    status: 201,
    code: "CONTACT_FORM_SUBMITTED",
    message: "The contact form has been submitted.",
    data: { contact },
  });
};

export default post;
