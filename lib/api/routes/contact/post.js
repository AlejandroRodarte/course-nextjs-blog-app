import connection from "../../../../db/mongoose/connection";
import Contact from "../../../../db/models/contact";

const saveContact = async (doc) => {
  try {
    await doc.save();
    return undefined;
  } catch (e) {
    return { message: "There was an error saving the contact data." };
  }
};

const post = async (req, res) => {
  const [, connectionError] = await connection.connect();
  if (connectionError)
    return res.status(200).send({
      status: 500,
      code: "DATABASE_CONNECTION_FAIL",
      message: connectionError.message,
      data: null,
    });

  const { contact } = req.body.data;
  const doc = new Contact(contact);

  const savingError = await saveContact(doc);
  if (savingError)
    res.status(200).send({
      status: 500,
      code: "SAVE_CONTACT_FAIL",
      message: savingError.message,
      data: null,
    });

  return res.status(200).send({
    status: 201,
    code: "CONTACT_FORM_SUBMITTED",
    message: "The contact form has been submitted.",
    data: { contact },
  });
};

export default post;
