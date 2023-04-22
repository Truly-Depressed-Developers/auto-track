const express = require('express');
const cors = require("cors");
const http = require("http");
const socket = require("socket.io")

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3001;

app.use(cors());

const io = new socket.Server(server, {
	cors: {
		origin: ["http://localhost:3000"],
		methods: ["GET", "POST"],
	}
});

const room = "room"

io.on("connection", (socket) => {
	socket.join(room)
	console.log("New client connected");

	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});

	// socket.on("message", (data) => {
	// 	const message = data;
	// 	console.log(message);

	// 	switch (message.action) {
	// 		case "test":
	// 			console.log("no siema")
	// 			break;

	// 		default:
	// 			break;
	// 	}
	// });
	const params = ["speed"]
	for (const param of params) {
		socket.on(param, data => socket.to(room).emit(param, data))
	}
});

server.listen(port, () => {
	console.log(`Socket io app listening on port ${port}`)
});