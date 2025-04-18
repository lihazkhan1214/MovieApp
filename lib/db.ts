// Importing mongoose library along with Connection type from it
import mongoose, { Connection } from "mongoose";

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
  // If a cached connection exists, return it
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }
  try {
    // If no cached connection exists, establish a new connection to MongoDB
    const cnx = await mongoose.connect(process.env.DB_URI!);
    console.log("Connected Successfully");
    cachedConnection = cnx.connection;

    console.log("New mongodb connection established");

    return cachedConnection;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
