import express from 'express';
import userRouter from './modules/user/user.routes';

const createServer = () => {
    const app = express()
    
    app.use(express.json());

    app.get("/healthcheck", (req, res) => {
        res.send("API is up and running!")
    });

    app.use("/users", userRouter)

    return app;
}

export default createServer;