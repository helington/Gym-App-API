import express from 'express';

import userRouter from './modules/user/user.routes';
import templateRouter from './modules/template/template.routes'
import exerciseRouter from './modules/exercise/exercise.routes';
import authRouter from './modules/auth/auth.routes';
import { authenticate } from './middleware/authenticate';

const createServer = () => {
    const app = express()
    
    app.use(express.json());

    app.get("/healthcheck", (req, res) => {
        res.send("API is up and running!")
    });

    app.use("/users", userRouter);
    app.use("/templates", authenticate, templateRouter);
    app.use("/exercises", exerciseRouter);
    app.use("/auth", authRouter);

    return app;
}

export default createServer;