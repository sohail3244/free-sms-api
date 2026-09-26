import dotenv from "dotenv";

dotenv.config();

import app from "./src/app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`=================================`);
  console.log(`SMS API SERVER RUNNING`);
  console.log(`PORT: ${PORT}`);
  console.log(`URL: http://localhost:${PORT}`);
  console.log(`=================================`);
});