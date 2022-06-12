//! 1) connect to database and run app

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
dotenv.config({ path: "./.env" });
const app = require("./app");

const port = process.env.PORT || 3008;

const server = app.listen(port, () => {
  console.log(`notification service is running on port ${port}`);
});
