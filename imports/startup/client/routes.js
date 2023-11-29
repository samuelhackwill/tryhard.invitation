import { FlowRouter } from "meteor/ostrio:flow-router-extra";

import "../../ui/pages/home.js";

flow = FlowRouter;

FlowRouter.route("/", {
  name: "home",
  action(params) {
    this.render("home", params);
  },
});
