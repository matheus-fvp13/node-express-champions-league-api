import createApp from "./app";

const app = createApp();
const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`🔥Server running at port ${port}`);
});