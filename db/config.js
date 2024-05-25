const mongoose = require("mongoose");
require("dotenv").config();
// connect MongoDB
mongoose.connect(process.env.MONGODB_URI);