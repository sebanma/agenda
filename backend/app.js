const express = require("express");
const agendaRoutes = require("./routes/agenda.routes.js");


const app = express();

//settings
app.set("port", 3000);

app.use(express.json());

//routes
app.use("/api/agenda", agendaRoutes);



module.exports = app;