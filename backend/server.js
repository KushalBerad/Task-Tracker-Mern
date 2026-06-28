const dns = require("dns");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/tasks", require("./routes/taskroutes"));

const PORT = process.env.PORT || 5000;

// start server
const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();