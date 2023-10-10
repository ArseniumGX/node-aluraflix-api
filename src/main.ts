import app from "./app";

const PORT = app.get("PORT") | 3001;

app.listen(PORT, () =>
	console.info(`App is running at http://localhost:${PORT}`)
);
