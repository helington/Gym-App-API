import express from 'express';

import userRouter from './modules/user/user.routes';
import workoutsRouter from './modules/workout/workout.routes'

const createServer = () => {
    const app = express()
    
    app.use(express.json());

    app.get("/healthcheck", (req, res) => {
        res.send("API is up and running!")
    });

    app.use("/users", userRouter);
    app.use("/workouts", workoutsRouter);

    return app;
}

export default createServer;