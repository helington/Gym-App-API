import express from 'express';

const createServer = () => {
    const app = express()
    
    app.use(express.json());

    app.get("/healthcheck", (req, res) => {
        res.send("API is up and running!")
    });

    return app;
}

export default createServer;