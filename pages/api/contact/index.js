import Route from "../../../lib/objects/route";
import middlewares from "../../../lib/api/middlewares";
import handlers from "../../../lib/api/routes/contact";
import specs from "../../../lib/forms/specs/server";

const route = new Route();

route.post(
  middlewares.validateObject(specs.contactFormSpec, "data.contact"),
  handlers.post
);

export default route.rootHandler;
