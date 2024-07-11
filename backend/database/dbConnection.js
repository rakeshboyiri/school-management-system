import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        dbName: "school_management_system",
    })
    .then(() => {
        console.log("Connected to database successfully");
    })
    .catch((error) => {
        console.log("Error occured while connecting to database");
    });
};

