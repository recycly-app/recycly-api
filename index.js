const http = require("http");
const app = require("./app");

const port = 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
