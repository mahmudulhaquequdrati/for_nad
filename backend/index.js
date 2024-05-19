const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const trackRoute = require("./routes/trackRoutes");
const donorRoutes = require("./routes/donorRoutes");

const app = express();
const port = 8800;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/donors", donorRoutes);
app.use("/api/track", trackRoute);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
