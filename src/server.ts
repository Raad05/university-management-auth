import mongoose from "mongoose";
import app from "./app";
import config from "./config";

async function bootstrap() {
    try {
        await mongoose.connect(config.databaseURL as string);
        console.log('Database connection successful.');

        app.listen(config.port, () => {
            console.log(`Server is running on port: ${config.port}`);
        });
    }

    catch (error) {
        console.log('Failed to connect to server.', error);
    }
}

bootstrap();