import mongoose from "mongoose";

const uri = process.env.MONGODB_URL;

const createConnection = () => {
  let connection = undefined;
  const connect = async () => {
    if (!connection) {
      try {
        connection = await mongoose.connect(uri);
        return [connection, undefined];
      } catch (e) {
        return [undefined, { message: "Error connecting to the database." }];
      }
    }
    return [connection, undefined];
  };
  const disconnect = async () => {
    try {
      await mongoose.disconnect();
      connection = undefined;
      if (process.env.NODE_ENV === "development")
        console.log("Disconnected from database.");
      return undefined;
    } catch (e) {
      return { message: "Error disconnecting from the database." };
    }
  };
  return { connect, disconnect };
};

const connection = createConnection();

export default connection;
