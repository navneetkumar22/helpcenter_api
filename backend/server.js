import app from "./app.js";
import mongoose from "mongoose";

//connect to database
(async () => {
    try {
        await mongoose
            .connect(process.env.MONGO_URI)
            .then(conn => {
                console.log(`Connected to database ${conn.connection.host}`);
            })
    } catch (error) {
        console.log(error);
    }
})()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})