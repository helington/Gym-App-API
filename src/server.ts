import express from 'express';
import cookieParser from 'cookie-parser';

import userRouter from './modules/user/user.routes';
import templateRouter from './modules/template/template.routes'
import exerciseRouter from './modules/exercise/exercise.routes';
import authRouter from './modules/auth/auth.routes';
import sessionRouter from './modules/session/session.routes';
import { authenticate } from './middleware/authenticate';

const createServer = () => {
    const app = express()
    
    app.use(cookieParser());
    app.use(express.json());

    app.get("/healthcheck", (req, res) => {
        res.send("API is up and running!")
    });

    app.use("/users", userRouter);
    app.use("/templates", authenticate, templateRouter);
    app.use("/exercises", exerciseRouter);
    app.use("/auth", authRouter);
    app.use("/sessions", authenticate, sessionRouter);

    return app;
}

export default createServer;