import { FlowRouter } from "meteor/ostrio:flow-router-extra"

import "../../ui/pages/home.js"

flow = FlowRouter

FlowRouter.route("/:finished/", {
  name: "home",

  action(params) {
    this.render("home", params)
  },
})

FlowRouter.route("/", {
  name: "default",
  action() {
    FlowRouter.go("/incomplete")
  },
})
