import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";

createConnection().then(async connection => {

    const app = express();
    app.listen(3000, () => {
        console.log("Server started on port 3000!");
    });

}).catch(error => console.log(error));
