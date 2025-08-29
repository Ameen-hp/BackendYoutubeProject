import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

let ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        console.log("✅ Database connected successfully:", connectionInstance.connection.host);
    } catch (err) {
        console.log("❌ Database connection failed:", err.message);
        process.exit(1);
    }
};

export default ConnectDB;
