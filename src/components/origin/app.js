import React from "react";
import { Control } from "./Control";
import PropsPanel from "./Richtext";
let attributes = { id: 10, name: "化" };
let funcs = {
  click: function() {
    console.log(this.name);
  }
};
let render = function() {
  return (
    <div id={this.id} onClick={this.click}>
      {this.name}
    </div>
  );
};
ReactDOM.render(
  <Control attributes={attributes} render={render} functions={funcs} />,
  document.getElementById("root")
);
ReactDOM.render(
  <PropsPanel attributes={attributes} />,
  document.getElementById("props")
);
