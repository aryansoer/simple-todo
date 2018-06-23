import * as _ from "lodash";

import { range } from "rxjs";
import { filter, map } from "rxjs/operators";

import "./app.scss";

if (process.env.NODE_ENV === "development") {
    console.log("Looks like we are in development mode!");
}

console.log(_.join(["Hello", "webpack"], " "));

range(1, 10)
    .pipe(filter((x: number) => x % 2 === 1), map((x: number) => x + x))
    .subscribe((x: number) => console.log(x));
