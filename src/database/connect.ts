import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const baseUrl: string | any = process.env.DB_URI;

try {
  mongoose.connect(baseUrl, {
    user: process.env.DB_ROOT_USER,
    pass: process.env.DB_ROOT_PASSWORD,
    dbName: "aluraflix"
  });
  console.info("banco conextado");
} catch (error) {
  console.error({ error });
}

export default mongoose;
