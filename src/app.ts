import express, { json } from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
    const app = express();
    const corsOptions = {
        origin: ["http://myapi.com.br"],
        methods: [ "GET" ]
    };

    app.use(json());
    app.use("/api", router);
    app.use(cors(corsOptions));

    return app;
}

export default createApp;

