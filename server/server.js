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

var authentication = {
	username: "",
	password: ""
}

io.on("connection", (socket) => {
	socket.join(room)
	console.log("New client connected");

	socket.on("disconnect", () => {
		console.log("Client disconnected");
	});


	socket.on("login", (data) => {
		let success = 0;
		data.username == authentication.username && data.password == authentication.password ? success = 1 : 0;
		io.to(room).emit("loginResult", { "success": success })
	});

	socket.on("register", (data) => {
		let success = 0;

		authentication.username = data.username;
		authentication.password = data.password;

		authentication.username !== "" && authentication.password !== "" ? success = 1 : 0;
		io.to(room).emit("registerResult", { "success": success })
		console.log("actioned", "username", authentication.username, "password", authentication.password)
	});

	const params = [
        "speed", 
        "fuel", 
        "range", 
        "wheelPressure", 
        "engineOil", 
        "coolant", 
        "powerSteeringFluid", 
        "brakeFluid", 
        "transmissionFluid", 
        "windscreenWasherFluid"
    ]

	for (const param of params) {
		socket.on(param, data => socket.to(room).emit(param, data))
	}
});

server.listen(port, () => {
	console.log(`Socket io app listening on port ${port}`)
});