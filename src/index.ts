import mongoose from "mongoose";
import app from "./app/app";

const { PORT } = process.env || 3000;
const { MONGO_URL } = process.env;

if (!MONGO_URL) {
  console.error("MONGO_URL is not defined in the environment variables.");
  process.exit(1);
}

mongoose.set("strictQuery", true);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Database connection successfull ");
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Server cannot start. Error: ${err.message}`);
    process.exit(1);
  });
