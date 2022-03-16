import Route from "../../../lib/objects/route";
import validateObject from "../../../lib/api/middlewares/validate-object";
import post from "../../../lib/api/routes/contact/post";
import contactFormSpec from "../../../lib/forms/specs/server/contact-form-spec";

const route = new Route();

route.post(validateObject(contactFormSpec, "data.contact"), post);

export default route.rootHandler;
