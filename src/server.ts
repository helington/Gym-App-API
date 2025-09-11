import express from 'express';

import userRouter from './modules/user/user.routes';
import workoutsRouter from './modules/workout/workout.routes'
import exerciseRouter from './modules/exercise/exercise.routes';
import authRouter from './modules/auth/auth.routes';

const createServer = () => {
    const app = express()
    
    app.use(express.json());

    app.get("/healthcheck", (req, res) => {
        res.send("API is up and running!")
    });

    app.use("/users", userRouter);
    app.use("/workouts", workoutsRouter);
    app.use("/exercises", exerciseRouter);
    app.use("/auth", authRouter);

    return app;
}

export default createServer;