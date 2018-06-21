import * as _ from "lodash";

import "./app.scss";

if (process.env.NODE_ENV === "development") {
    console.log("Looks like we are in development mode!");
}

console.log(_.join(["Hello", "webpack"], " "));
