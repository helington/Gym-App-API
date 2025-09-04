import express from 'express';
import workoutsRouter from './modules/workout/workout.routes'

const createServer = () => {
    const app = express()
    
    app.use(express.json());

    app.get("/healthcheck", (req, res) => {
        res.send("API is up and running!")
    });

    app.use("/workouts", workoutsRouter);

    return app;
}

export default createServer;